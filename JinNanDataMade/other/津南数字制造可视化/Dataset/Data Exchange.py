#-*- coding:utf-8 -*-

'''
# Author: chenhao
# Date: Jan.8
# Description: Exchange the dataset into .json form
'''

import pandas as pd
import json

# 用于显示完整内容
pd.set_option('display.max_columns', 1000)
pd.set_option('display.width', 1000)
pd.set_option('display.max_colwidth', 1000)

# 读取数据
train = pd.read_csv('../../Dataset/original/jinnan_round1_train_20181227.csv', encoding='gb18030')
print(train.shape)

# 选取的特征为A1,2,3,4,6,8,10,12,13,15,17,18,19,21,22,23,25,27, B1,2,3,6,8,12,13,14
# 剔除日期特征
train.drop([ 'A5', 'A7', 'A9', 'A11', 'A14', 'A16', 'A20', 'A24', 'A26', 'A28', 'B4', 'B5', 'B7', 'B9', 'B10', 'B11'], axis=1, inplace=True)

# print(train['样本id'])

train['样本id'] = train['样本id'].apply(lambda x: int(x.split('_')[1]))

# 将数据的缺失值进行补充
train = train.fillna(0)
print(train)

# result = []

#
# 将数据转换为json的格式
json_data = {"rows": [train['收率'].tolist(), train['A1'].tolist(), train['A2'].tolist(), train['A3'].tolist(),
                      train['A4'].tolist(), train['A6'].tolist(), train['A8'].tolist(), train['A10'].tolist(),
                      train['A12'].tolist(), train['A13'].tolist(), train['A15'].tolist(), train['A17'].tolist(),
                      train['A18'].tolist(), train['A19'].tolist(), train['A21'].tolist(), train['A22'].tolist(),
                      train['A23'].tolist(), train['A25'].tolist(), train['A27'].tolist(),  train['B1'].tolist(),
                      train['B2'].tolist(), train['B3'].tolist(), train['B6'].tolist(), train['B8'].tolist(),
                      train['B12'].tolist(), train['B13'].tolist(), train['B14'].tolist(), train['样本id'].tolist()]}
with open('train.json', 'w') as file:
    json.dump(json_data, file)
print(json_data)
print('完成文件加载')
