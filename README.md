# EV-intelligence-India

### 1. **Battery Heath Prediction**

"After comparing linear, regularized, tree-based, and ensemble regression models, the tuned XGBoost Regressor achieved the strongest performance, with an R² of 0.958 on the test set and a mean cross-validation R² of 0.956."



"The model achieved an MAE of approximately 0.97 percentage points, meaning its predictions differed from the actual battery-health values by about 0.97 percentage points on average on the test set."

### 2. **Charging Station Requirement Prediction**

Several regression algorithms were evaluated, including Linear Regression, Decision Tree Regressor, Random Forest Regressor, and XGBoost. Model performance was evaluated using 5-fold cross-validation and further improved through RandomizedSearchCV for hyperparameter tuning.

The final Random Forest Regressor achieved:

Test R²: 78.16%
MAE: 182.11 charging stations
RMSE: 266.77 charging stations
Cross-validation Mean R²: 82.15%

Feature importance analysis showed that Goods Vehicles, Total Population, Two Wheelers, Grand Total, and Four Wheelers were among the most influential features for the model's predictions.
