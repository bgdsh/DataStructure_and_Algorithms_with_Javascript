import cv2
import sys
import numpy as np 

def get_all_contours(img):
  ref_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
  ret, thresh = cv2.threshold(ref_gray, 127, 255, 0)
  im2, contours, hierarchy = cv2.findContours(thresh.copy(), cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
  return contours

def get_ref_contour(img):
  contours = get_all_contours(img)
  for contour in contours:
    area = cv2.contourArea(contour)
    img_area = img.shape[0] * img.shape[1]
    if 0.05 < area/float(img_area) < 0.8:
      return contour


if __name__ == '__main__':
  img1 = cv2.imread(sys.argv[1])
  img2 = cv2.imread(sys.argv[2])
  ref_contour = get_ref_contour(img1)
  input_contours = get_all_contours(img2)
  closest_contour = None
  min_dist = None
  contour_img = img2.copy()
  