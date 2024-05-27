from gradio_client import Client
import json

client = Client("http://127.0.0.1:7860/",upload_files=False,auth=("yesheng","yesheng"))

result = client.predict(api_name="/load")
chatbot = result[4]["value"]
print(chatbot)

client.predict(inputs = "who are you?",api_name="/transfer_input")
client.predict(chatbot,False,False,None,"简体中文",api_name="/predict")
