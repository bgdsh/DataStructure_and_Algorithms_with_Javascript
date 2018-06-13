import cv2
import numpy as np 
import math

img = cv2.imread('./bird.jpeg', cv2.IMREAD_GRAYSCALE)
rows, cols = img.shape[:2]

img_output = np.zeros(img.shape, dtype=img.dtype)

for i in range(rows):
  for j in range(cols):
    offset_x = int(25.0 * math.sin(2*3.14*i/180))
    offset_y = 0
    if j+offset_x < rows:
      img_output[i, j] = img[i, (j+offset_x)%cols]
    else:
      img_output[i, j] = 0
cv2.imshow('Input', img)
cv2.imshow('Vertical wave', img_output)
cv2.waitKey(5000)