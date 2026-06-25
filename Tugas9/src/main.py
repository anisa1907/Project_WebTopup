from fastapi import FastAPI

app = FastAPI(
    title="Project WebTopup API",
    version="1.0.0"
)

@app.get("/")
def root():
    return {"message": "Backend berjalan"}

@app.get("/health")
def health():
    return {"status": "OK"}