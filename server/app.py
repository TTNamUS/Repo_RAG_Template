from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React app running on localhost
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define a GET route for /query
@app.get("/query")
async def get_query(query: str):
    # Simply return the query string
    answer = query
    return {"answer": answer}