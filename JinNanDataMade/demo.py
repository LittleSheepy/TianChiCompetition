#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import h2o
import pandas as pd
from h2o.automl import H2OAutoML

h2o.init(max_mem_size_GB=10)

dataset = h2o.upload_file('features.csv', header=0)
train_data = dataset[dataset['rate'] > 0.0]
test_data = dataset[dataset['rate'] < 0.0]

remove_columns = ['sample_id', 'rate']
feature_name = [column for column in train_data.columns if column not in remove_columns]
label = 'rate'

aml = H2OAutoML(max_models=10, seed=2019, max_runtime_secs=500)
aml.train(x=feature_name, y=label, training_frame=train_data)

lb = aml.leaderboard
lb.head(rows=lb.nrows)

automl_predictions = aml.predict(test_data).as_data_frame().values.flatten()

predictions = pd.DataFrame({'sample_id': test_data['sample_id'],
                            'rate': automl_predictions})
predictions.to_csv('sub.csv', header=False, index=False)
