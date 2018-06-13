import cv2
import numpy as np
img = cv2.imread('./bird.jpeg')
num_rows, num_cols = img.shape[:2]
translation_matrix = np.float32([
  [1, 0, 70],
  [0, 1, 110]
])
img_translation = cv2.warpAffine(img, translation_matrix, (num_cols + 70, num_rows + 110), cv2.INTER_LINEAR, cv2.BORDER_WRAP, 1)

translation_matrix = np.float32([
  [1, 0, -30],
  [0, 1, -50]
])
img_translation = cv2.warpAffine(img_translation, translation_matrix, (num_cols + 70 + 30, num_rows + 110 + 50))

cv2.imshow('TRANSLATION', img_translation)
cv2.waitKey(5000)