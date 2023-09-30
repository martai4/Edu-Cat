from cv2 import Mat

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
        pass

    def classify(self, img: Mat):
        return Holands(1.0, 1.0, 1.0, 1.0, 1.0, 1.0)
