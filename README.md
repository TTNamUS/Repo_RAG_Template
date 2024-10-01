# Repo_RAG_Template


## Setup
Open 2 terminal at the same time. </br>
### Client
- Install npm
- cd client
- npm start
### Server
- conda create --name {conda name} </br>
- conda activate {conda name} </br>
- conda install pip </br>
- pip install -r requirements.txt <br>
- uvicorn app:app --reload </br>


## Tasks
### Start
Fork this git repo into local github </br>
### Data
1. Define topic </br>
2. Write chunking function in data/data_processing/data_processing.py </br>
3. Write ChromaDB in data/data_processing/chromadb.py </br>
4. Combine everything in main.py </br>
### Server
1. Finish RAG </br>
2. Use it in get_query in server/app.py </br>