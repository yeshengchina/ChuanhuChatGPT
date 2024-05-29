from gradio_client import Client

client = Client("http://127.0.0.1:7861/",auth=("yesheng","yesheng"),upload_files=False)
'''- [Markdown] value_11: str
     - [Textbox] value_1: str
     - [Textbox] 设置保存文件名: str
     - [Textbox] system_prompt: str
     - [Chatbot] chuanhu_chat: Tuple[str | Dict(file: filepath, alt_text: str | None) | None, str | Dict(file: filepath, alt_text: str | None) | None]
     - [Checkbox] 单轮对话: bool
     - [Slider] temperature: float (numeric value between 0 and 2.0)
     - [Slider] topp: float (numeric value between 0 and 1.0)
     - [Slider] n_choices: float (numeric value between 1 and 10)
     - [Textbox] stop: str
     - [Slider] max_context: float (numeric value between 1 and 32768)
     - [Slider] max_generations: float (numeric value between 1 and 32768)
     - [Slider] presence_penalty: float (numeric value between -2.0 and 2.0)
     - [Slider] frequency_penalty: float (numeric value between -2.0 and 2.0)
     - [Textbox] logit_bias: str
     - [Textbox] 用户标识符: str
     - [Textbox] value_174: str
     - [Textbox] value_177: str
     - [Textbox] value_180: str
     - [Textbox] value_183: str
     - [Textbox] value_186: str
     - [Textbox] value_189: str
     - [Textbox] role: str
     - [Textbox] nick_name: str
     - [Textbox] background: str
     - [Textbox] personality: str
     - [Textbox] emotions: str
     - [Textbox] voice: str
     - [Textbox] dialogstyle: str
     - [Textbox] knowledge: str
     - [Textbox] facial_expression: str
     - [Textbox] body_movements: str
     - [Textbox] goal: str
     - [Radio] 从列表中加载对话: Literal[]""'''
# user_info, user_name, current_model, like_dislike_area, saveFileName, systemPromptTxt, 
# chatbot, single_turn_checkbox, temperature_slider, top_p_slider, n_choices_slider, stop_sequence_txt, max_context_length_slider, max_generation_slider, presence_penalty_slider, frequency_penalty_slider, logit_bias_txt, user_identifier_txt, 
# character_introduction_prompt,character_activedialogsystem_prompt,character_dialogsystem_prompt,character_gesture_prompt, character_summarize_prompt,character_reflection_prompt,
# character_role_txtbox,character_nickname_txtbox,character_background_txtbox,character_personality_txtbox,character_emotions_txtbox,character_voice_txtbox,character_dialogstyle_txtbox,character_knowledge_txtbox,character_facialexpression_txtbox,character_bodymovements_txtbox,character_goal_txtbox,
# historySelectList=client.predict(api_name="/predict")
result = client.predict(api_name="/load")
chatbot = result[4]['value']

print(client.predict(chatbot,False,False,None,"简体中文",api_name="/predict"))