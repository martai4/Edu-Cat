from numpy import ndarray
from tensorflow import keras

class Holands:
    def __init__(self, artistic: float, conventional: float, enterprising: float, investigative: float,
                 realistic: float, social: float):
        self.artistic: float = artistic
        self.conventional: float = conventional
        self.enterprising: float = enterprising
        self.investigative: float = investigative
        self.realistic: float = realistic
        self.social: float = social

class DrawingClassificator:
    def __init__(self):
        self.model = keras.models.load_model('HomelessModel')
        pass

    def classify(self, img: ndarray):
        return self.model.predict(ndarray.reshape(1, 192, 320, 3))