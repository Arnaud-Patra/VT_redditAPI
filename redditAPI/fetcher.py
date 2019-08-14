import re
import requests
import praw


'''Without praw.init'''
# reddit = praw.Reddit(client_id='jY4RL92sf7AVSA',
#                      client_secret='uSWci46GVGSdnCkBwMvpvzxw-K4',
#                      username='Arnaudp44',
#                      password='sxks*63k',
#                      user_agent='prawFetcher')



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


# top_all_EarthPorn = EarthPorn.top('day', limit=1)
#     for submission in top_all_EarthPorn:
#         if not submission.stickied:
#             print(submission.url)


def subfetcher():

    """With init"""
    reddit = praw.Reddit('bot1', user_agent='bot1 user agent')

    """Open subreddits"""
    with open('subreddits.txt') as subs_txt:
        for sub in subs_txt:
            subreddit = reddit.subreddit(sub)
            top_post = subreddit.top('day', limit=1)
            if not top_post.stickied:
                print(top_post.url)
            else:
                print("> top post is stickied")

def get_top(sub):
    # subreddit = reddit.subreddit(sub)
    pass


if __name__ == "__main__":
    # execute only if run as a script
    subfetcher()
