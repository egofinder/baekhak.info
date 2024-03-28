---
title: "Automating Job Application Decisions"
date: "2024-03-27"
author: "Baekhak Jeon"
---

# Introduction

In today's competitive job market, staying on top of new job postings and deciding which ones to apply for can be a time-consuming task. However, with the power of web scraping and artificial intelligence (AI), we can automate this process to make more informed decisions efficiently. In this blog post, we'll explore how to scrape job postings from a website using Python and Beautiful Soup, and then use an AI chatbot to help decide whether to apply for each job.

---

## Scraping Job Postings

We start by importing the necessary libraries, including requests for sending HTTP requests, Beautiful Soup for parsing HTML content, and json for handling JSON data. We define a function called `function` that takes a posting ID as input and scrapes the title and body of the job posting from a specific radiokorea.com URL. We iterate through a range of posting IDs, scrape each job posting, and store the data in a list of dictionaries called `job_postings`. We then write the scraped data to a JSON file named `job_postings.json`.

```python
import requests
import json
import ollama
import time

from bs4 import BeautifulSoup

def function(id):
    url = f"https://radiokorea.com/bulletin/bbs/board.php?bo_table=c_jobs&wr_id={id}"
    try:
        response = requests.get(url)
        response.raise_for_status()
    except requests.RequestException as e:
        print(f"Error: {id}, Reason: {e}")
        return None

    soup = BeautifulSoup(response.content, "html.parser")

    try:
        title = soup.find("title").get_text()
        body = soup.find(id="writeContents")
        if title and body:
            return {"id":id, "title": title, "body": body.text}
        else:
            print("Not enough information to scrape from this website.")
            return None
    except Exception as e:
        print(f"Error: {id}, Reason: {e}")
        return None

job_postings = []

# sample id range
for i in range(3719540, 3719550):
    posting = function(i)
    if posting:
        job_postings.append(posting)
    time.sleep(0.3)

with open('job_postings.json', 'w') as f:
    json.dump(job_postings, f, indent=4, ensure_ascii=False)
```

## Automating Application Decisions

Next, we use an AI chatbot provided by the [Ollama platform](https://ollama.com/) to assist in making application decisions for each job posting. We loop through each scraped job posting, construct a message to ask the user whether they should apply for the job, and send it to the chatbot. Based on the response from the chatbot, we categorize the job posting as either "should apply" or "should not apply" and store the relevant data in a list called `should_apply`. Finally, we write the filtered data to a JSON file named `should_apply.json`.

```python
should_apply = [];

for i in range(0, len(job_postings)):

	user_content = (
	"Please respond strictly with 'yes' or 'no'."
	"You are going to find out below job posting is related to me or not?"
	"I am a software engineer with experience in Next.js, Laravel, php, react, javascript,"
	"relational database, non-relational database, amazon aws, cicso network device."
	"I have a Bachelor's degree in Electrical engineering."
	"Could you advise if I should apply for the job in the following posting?"
	"Below is the job posting information:\n"
	f"{job_postings[i]['title']}\n"
	f"{job_postings[i]['body']}"
	)

	try:
	response = ollama.chat(model='mistral:latest', messages=[
	{'role': 'user',
	'content': user_content}
	])
	except Exception as e:
		print(f"Error: {i}, Reason: {e}")
		continue

	if 'yes' in response['message']['content'].lower():
		job_postings[i]['reason'] = response['message']['content']
		should_apply.append(job_postings[i])

with open('should_apply.json', 'w') as f:
	json.dump(should_apply, f, indent=4, ensure_ascii=False)
```

---

# Conclusion

Automating the job application decision-making process can save time and help prioritize opportunities that align with our career goals. By combining web scraping techniques with AI-powered chatbots, we can streamline the job search process and focus our efforts on the most promising opportunities.
