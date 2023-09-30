import uvicorn
from fastapi import FastAPI, UploadFile, HTTPException
import numpy as np
from drawingClassification import DrawingClassificator

app = FastAPI()

classificator = DrawingClassificator()

@app.post("/image/")
async def showImage(image : UploadFile):
    if image is None or image.content_type is None:
        raise HTTPException(status_code=400, detail="Bad Request: Image not provided")
    if image.content_type.startswith("image/"):
        contents = await image.read()
        nparr = np.fromstring(contents, np.uint8)
        return classificator.classify(nparr)
    else:
        raise HTTPException(status_code=415, detail="Unsupported Media Type: %s Looking for form-data with image/*".format(image.content_type))


if __name__ == "__main__":
    uvicorn.run("main:app", port=5000, log_level="info")