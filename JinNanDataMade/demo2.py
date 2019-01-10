# 想直接看对自己模型的提升的，把max_model改成20，赋权重融合到自己模型里
# 按我的经验，融合之前先算一下差异性,np.corr,可以达到0.97左右的相关性的话，融合效果会比较好

# 想用的就用，不想用的没必要在这浪费时间
# 也呼吁大家多看看鱼的代码，里面干货很多，这份代码的成绩取决于你放进来什么特征
# 这份特征在我自己特征工程之后可以达到榜上的成绩，原始特征大概是88左右

import h2o
from h2o.automl import H2OAutoML
import numpy as np
import pandas as pd
#h2o.init(max_mem_size='64G')
h2o.init()

#train = h2o.upload_file("./datasets1/jinnan_round1_train_20181227.csv", header=0)
#test = h2o.upload_file("./datasets1/jinnan_round1_testA_20181227.csv", header=0)

train = h2o.upload_file("./datasets1/train.csv", header=0)
test = h2o.upload_file("./datasets1/test.csv", header=0)

feature_name = [i for i in train.columns if i not in ['id','target']]
x = feature_name
y = 'target'

aml = H2OAutoML(max_models=320, seed=2019, max_runtime_secs=10)
#aml.train(x=feature_name, y=y, training_frame=train, leaderboard_frame=test)
aml.train(x=feature_name, y=y, training_frame=train)

automl_predictions = aml.predict(test)

aaa = automl_predictions.get_frame(automl_predictions.frame_id,rows = 150)
predictions = pd.DataFrame({'rate': automl_predictions})
predictions.to_csv('sub.csv')