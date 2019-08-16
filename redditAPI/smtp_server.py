# import the smtplib module. It should be included in Python by default
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

MY_ADDRESS = "arnaudpatra@hotmail.fr"

def smtp_setup():
    """set up the SMTP server"""

    pwd = "sxks63k"

    # Paramètre IMAP récupérés de outlook
    s = smtplib.SMTP(host='outlook.office365.com', port=993)

    s.starttls()

    s.login(MY_ADDRESS, pwd)
    print("> Login successful")
    send_mail(s)

def send_mail(s):
    msg = MIMEMultipart()

    # setup the parameters of the message
    msg['From'] = MY_ADDRESS
    msg['To'] = MY_ADDRESS
    msg['Subject'] = "This is TEST"

    # add in the message body
    # msg.attach(MIMEText(message, 'plain'))

    # send the message via the server set up earlier.
    print(">sending message")
    s.send_message(msg)
    print(">message sent !")

    del msg


if __name__ == "__main__":

    smtp_setup()