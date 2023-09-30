import sys
import subprocess
import pyautogui
import pygetwindow
import time
import os
from PySide6.QtWidgets import QMainWindow, QPushButton, QApplication, QHBoxLayout, QVBoxLayout, QRadioButton, QWidget
def open_paint():
    try:
        # Open Paint using the 'mspaint' command
        subprocess.Popen(['mspaint', 'blank.png'])
        time.sleep(2)  # Wait for Paint to open
        return True
    except Exception as e:
        print(f"Error: {e}")
        return False
class CapturePaintWindowApp(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle('Capture Paint Window')
        self.setGeometry(100, 100, 400, 400)
        layout1 = QHBoxLayout()
        layout1.setSpacing(20)
        self.capture_button = QPushButton('Capture Paint Window', self)
        self.capture_button.clicked.connect(self.capture_paint_window)
        self.capture_button.setMinimumSize(0, 100)
        layout1.addWidget(self.capture_button)

        self.setGeometry(100, 100, 400, 200)

        layout2 = QVBoxLayout()

        # Create radio buttons
        self.realistic_radio = QRadioButton('Realistic')
        self.realistic_radio.click()
        self.investigative_radio = QRadioButton('Investigative')
        self.artistic_radio = QRadioButton('Artistic')
        self.social_radio = QRadioButton('Social')
        self.enterprising_radio = QRadioButton('Enterprising')
        self.conventional_radio = QRadioButton('Conventional')

        layout2.addWidget(self.realistic_radio)
        layout2.addWidget(self.investigative_radio)
        layout2.addWidget(self.artistic_radio)
        layout2.addWidget(self.social_radio)
        layout2.addWidget(self.enterprising_radio)
        layout2.addWidget(self.conventional_radio)

        layout1.addLayout(layout2)

        central_widget = QWidget(self)
        central_widget.setLayout(layout1)
        self.setCentralWidget(central_widget)

    def capture_paint_window(self):
        # Find the Paint window
        paint_window = pygetwindow.getWindowsWithTitle('blank.png - Paint')[0]

        # Activate the Paint window
        paint_window.activate()

        directory = ""
        if self.realistic_radio.isChecked():
            directory = self.realistic_radio.text()
        elif self.investigative_radio.isChecked():
            directory = self.investigative_radio.text()
        elif self.artistic_radio.isChecked():
            directory = self.artistic_radio.text()
        elif self.social_radio.isChecked():
            directory = self.social_radio.text()
        elif self.enterprising_radio.isChecked():
            directory = self.enterprising_radio.text()
        elif self.conventional_radio.isChecked():
            directory = self.conventional_radio.text()
        # Capture the entire Paint window
        screenshot = pyautogui.screenshot(region=(paint_window.left + 13, paint_window.top + 152, 320, 192))
        existing_files = os.listdir(directory)

        # Find the last used number (if any)
        last_number = -1
        for filename in existing_files:
            try:
                number = int(filename[0:-(len(".png"))])
                last_number = max(last_number, number)
            except ValueError:
                pass
        screenshot.save(directory + "/" + str(last_number + 1) + ".png")

def main():
    open_paint()
    app = QApplication(sys.argv)
    window = CapturePaintWindowApp()
    window.show()
    sys.exit(app.exec())

if __name__ == '__main__':
    main()