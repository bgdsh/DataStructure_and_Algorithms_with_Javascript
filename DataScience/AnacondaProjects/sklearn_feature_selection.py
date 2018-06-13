# from sklearn.datasets import load_boston, load_iris
# from sklearn.model_selection import train_test_split
# from sklearn.utils import check_random_state
# from sklearn.feature_selection import SelectKBest, SelectPercentile, chi2, f_regression

# boston = load_boston()
# X = boston.data
# Y = boston.target

# print(X.shape)
# print(Y.shape)
# rs = check_random_state(1000)
# X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.25, random_state=rs)





# import numpy as np 
# from sklearn.preprocessing import LabelEncoder, LabelBinarizer
# X = np.random.uniform(0.0, 1.0, size=(10,2))
# Y = np.random.choice(('Male', 'Female'), size=(10))
# print(X[0])
# print(Y[0])


# le = LabelEncoder()
# yt = le.fit_transform(Y)
# print(yt)
# # le.classes_array(['Female', 'Male'], dtype='|S6')
# output = [1, 0, 1, 1, 0, 0]

# decoded_output = [le.classes_[i] for i in output]
# print(decoded_output)

# lb = LabelBinarizer()
# Yb = lb.fit_transform(Y)
# print(Yb)
# print(lb.inverse_transform(Yb))





from sklearn.preprocessing import Normalizer
import numpy as np
data = np.array([1.0, 2.0])
n_max = Normalizer(norm='max')
print(n_max.fit_transform(data.reshape(1,-1)))