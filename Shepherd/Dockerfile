FROM tensorflow/tensorflow:latest
RUN pip install uvicorn
RUN pip install fastapi
RUN pip install gdown
RUN pip install python-multipart
WORKDIR /usr/
COPY main.py main.py
COPY drawingClassification.py drawingClassification.py
COPY HomelessModel.zip.001 HomelessModel.zip.001 
COPY HomelessModel.zip.002 HomelessModel.zip.002
COPY HomelessModel.zip.003 HomelessModel.zip.003
RUN cat HomelessModel.zip* > HomelessModel.zip
RUN unzip HomelessModel.zip
EXPOSE 5000
ENTRYPOINT ["python", "main.py"]
