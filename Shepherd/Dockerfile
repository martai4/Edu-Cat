FROM tensorflow/tensorflow:latest
RUN pip install uvicorn
RUN pip install fastapi
RUN pip install gdown
RUN pip install python-multipart
RUN pip install pillow
WORKDIR /usr/
COPY main.py main.py
COPY drawingClassification.py drawingClassification.py
RUN gdown --no-cookies 1oNR0x4_YRE6PhJuHSUa4g-NJQYhAg1Y3
RUN unzip HomelessModel.zip
EXPOSE 5000
ENTRYPOINT ["python", "main.py"]
