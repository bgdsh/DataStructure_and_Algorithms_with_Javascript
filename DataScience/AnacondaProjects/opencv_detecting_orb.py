import cv2
import numpy as np 

input_image = cv2.imread('./images/fishing_house.jpg')
gray_image = cv2.cvtColor(input_image, cv2.COLOR_BGR2GRAY)

orb = cv2.ORB_create()
keypoints = orb.detect(gray_image, None)
keypoints, descriptors = orb.compute(gray_image, keypoints)

cv2.drawKeypoints(input_image, keypoints, input_image, color=(0,255,0))

cv2.imshow('ORB keypoints', input_image)
cv2.waitKey()
