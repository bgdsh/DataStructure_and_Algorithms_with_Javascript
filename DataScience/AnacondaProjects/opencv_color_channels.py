import cv2
img = cv2.imread('./cross_section_of_communication_pipe.png', cv2.IMREAD_COLOR)
# gray_img = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)
# cv2.imshow('GRAY SCALE IMAGE', gray_img)

yuv_image = cv2.cvtColor(img, cv2.COLOR_BGR2YUV)
y, u, v = cv2.split(yuv_image)
# cv2.imshow('Y channel', y)
# cv2.imshow('U channel', u)
cv2.imshow('V channel', v)

cv2.waitKey(3000)