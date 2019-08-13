# import re
# import requests
import praw


'''Without praw.init'''
# reddit = praw.Reddit(client_id='jY4RL92sf7AVSA',
#                      client_secret='uSWci46GVGSdnCkBwMvpvzxw-K4',
#                      username='Arnaudp44',
#                      password='sxks*63k',
#                      user_agent='prawFetcher')

"""With init"""
reddit = praw.Reddit('bot1', user_agent='bot1 user agent')

# subreddit = reddit.subreddit('Dankmemes')

# hot_python = subreddit.hot(limit=10)

# for submission in hot_python:
#
#     # dir_sub = dir(submission)
#
#     if not submission.stickied:
#         print('Title: {}, ups: {}, downs: {}, Have we visited?: {}'.format(submission.title,
#                                                                                submission.ups,
#                                                                                submission.downs,
#                                                                                submission.visited))


EarthPorn = reddit.subreddit('EarthPorn')

top_all_EarthPorn = EarthPorn.top('day', limit=10)
for submission in top_all_EarthPorn:
    if not submission.stickied:
        print(submission.url)




