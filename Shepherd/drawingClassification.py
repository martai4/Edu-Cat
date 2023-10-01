from tensorflow import keras
import tensorflow as tf
import numpy as np
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

    def classify(self, img):
        predict = self.model.predict(tf.convert_to_tensor(np.array(img).reshape(1, 192, 320, 3), dtype="float"))[0]
        return Holands(float(predict[0]), float(predict[1]), float(predict[2]), float(predict[3]), float(predict[4]), float(predict[5]))