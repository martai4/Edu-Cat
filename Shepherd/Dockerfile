FROM tensorflow/tensorflow:latest
RUN pip install uvicorn
RUN pip install fastapi
RUN pip install gdown
RUN pip install python-multipart
# Workdir
WORKDIR /usr/
COPY main.py main.py
COPY drawingClassification.py drawingClassification.py
RUN gdown --folder https://drive.google.com/drive/folders/1cNRHRbwLW6PBErWaI-p7cLeb2FJfiNJ4?usp=drive_link
# Run
ENTRYPOINT ["python", "main.py"]
