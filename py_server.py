from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Настройка CORS для подключения к React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # адрес вашего React приложения
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Модель данных от фронтенда
class TrialRequest(BaseModel):
    email: str

@app.post("/start-trial")
async def start_trial(request: TrialRequest):
    email = request.email
    
    # Ваш код обработки здесь
    print(f"Received trial request for email: {email}")
    
    # Проверка email, логика регистрации и т.д.
    if "@" in email:
        return {"success": True, "message": f"Trial started for {email}!"}
    else:
        return {"success": False, "message": "Invalid email format"}

# Проверочный эндпоинт
@app.get("/")
async def root():
    return {"message": "FastAPI server is running!"}

import uvicorn

if __name__ == "__main__":
    uvicorn.run("py_server:app", host="0.0.0.0", port=8000, reload=True)