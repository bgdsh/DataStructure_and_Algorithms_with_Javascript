import cv2
import numpy as np 

input_image = cv2.imread('./images/house.jpg')
gray_image = cv2.cvtColor(input_image, cv2.COLOR_BGR2GRAY)
fast = cv2.FastFeatureDetector_create()
brief = cv2.xfeatures2d.BriefDescriptorExtractor_create()
keypoints = fast.detect(gray_image, None)
keypoints, descriptors = brief.compute(gray_image, keypoints)

cv2.drawKeypoints(input_image, keypoints, input_image, color=(0,255,0))
cv2.imshow('BRIEF keypoints', input_image)
cv2.waitKey()