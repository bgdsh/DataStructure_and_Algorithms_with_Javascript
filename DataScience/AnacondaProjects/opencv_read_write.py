import cv2
img = cv2.imread('./cross_section_of_communication_pipe.png', cv2.IMREAD_GRAYSCALE)
# cv2.imshow('Inout image', img)
cv2.imwrite('./cross_section_of_communication_pipe.jpg', img, [int(cv2.IMWRITE_JPEG_QUALITY), 5])
