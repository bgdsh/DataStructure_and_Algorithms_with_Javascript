import cv2
import numpy as np 
img = cv2.imread('./images/box.png')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
gray = np.float32(gray)

dst = cv2.cornerHarris(gray, blockSize=4, ksize=5, k=0.04)
dst = cv2.dilate(dst, None)

img[dst>0.01*dst.max()] = [0,0,0]
cv2.imshow('Harris Corner(only sharp)', img)

dst = cv2.cornerHarris(gray, blockSize=14, ksize=5, k=0.04)
dst = cv2.dilate(dst, None)

print(dst.shape)

img[dst>0.01*dst.max()] = [0,0,0]
cv2.imshow('Harris Corner(only soft)', img)

cv2.waitKey()
cv2.destroyAllWindows()