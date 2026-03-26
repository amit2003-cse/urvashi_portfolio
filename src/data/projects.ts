export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  impact: string[];
  problem: string;
  solution: string;
  technicalDetails: {
    sql?: string;
    python?: string;
    tools: string[];
  };
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "hr-analytics",
    title: "HR Attrition & Retention Analytics",
    category: "People Analytics",
    description: "An enterprise-grade End-to-End Data Engineering & BI Pipeline. Built a proactive retention strategy model identifying that overtime workers show a 30.5% attrition rate, saving an estimated $150k annually.",
    image: "/hr-dashboard.png",
    tags: ["Advanced SQL (CTEs)", "Power BI", "Star Schema"],
    impact: [
      "Identified 30.5% attrition rate among overtime workers.",
      "Proposed a retention strategy saving ~$150k/year in hiring costs.",
      "Streamlined data ingestion from CSV to SQL Server using Python scripts."
    ],
    problem: "The HR department was struggling with high employee turnover rates without a clear understanding of the root causes. Traditional reporting was reactive rather than proactive.",
    solution: "Developed an E2E pipeline that cleans raw HR data, loads it into a Star Schema in SQL, and visualizes it in Power BI. Implemented a predictive attrition layer using historical data.",
    technicalDetails: {
      sql: `
WITH AttritionCalc AS (
    SELECT 
        Department,
        OverTime,
        COUNT(*) as TotalEmployees,
        SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) as ExitedEmployees
    FROM HR_Data
    GROUP BY Department, OverTime
)
SELECT 
    Department,
    OverTime,
    TotalEmployees,
    ExitedEmployees,
    CAST(ExitedEmployees AS FLOAT) / TotalEmployees * 100 as AttritionRate
FROM AttritionCalc
ORDER BY AttritionRate DESC;
      `,
      python: `
import pandas as pd
import sqlite3

def clean_hr_data(file_path):
    df = pd.read_csv(file_path)
    # Drop irrelevant columns
    df.drop(['EmployeeCount', 'StandardHours'], axis=1, inplace=True)
    # Handle missing values
    df.fillna(method='ffill', inplace=True)
    return df

# Load to SQL
df = clean_hr_data('hr_data.csv')
conn = sqlite3.connect('hr_analytics.db')
df.to_sql('hr_cleaned', conn, if_exists='replace', index=False)
      `,
      tools: ["SQL Server", "Python (Pandas)", "Power BI", "Excel"]
    },
    githubUrl: "https://github.com/palurvashi2004-rgb/HR-Analytics-Dashboard"
  },
  {
    id: "supply-chain",
    title: "Supply Chain & Inventory Optimization",
    category: "Operations Analytics",
    description: "Identified 25% dead stock and resolved a 60% stockout risk. Engineered an Automated Reorder Point (ROP) calculation model using Python and complex SQL joins to streamline replenishment triggers.",
    image: "/supply-chain-dashboard.png",
    tags: ["Python (Pandas)", "SQL Views", "Predictive ROP"],
    impact: [
      "Reduced dead stock by 25% through inventory aging analysis.",
      "Improved stock availability by 60% with automated ROP alerts.",
      "Optimized warehouse space utilization by 15%."
    ],
    problem: "The company faced frequent stockouts for high-demand items while overstocking low-moving SKUs, leading to capital blockage and lost sales.",
    solution: "Engineered a dynamic Reorder Point (ROP) model that calculates safety stock based on lead time and demand variability. Integrated this into a real-time dashboard for procurement.",
    technicalDetails: {
      sql: `
CREATE VIEW InventoryStats AS
SELECT 
    ProductID,
    AVG(DailyDemand) as AvgDemand,
    STDEV(DailyDemand) as DemandStdDev,
    AVG(LeadTime) as AvgLeadTime,
    (AVG(DailyDemand) * AVG(LeadTime)) + (1.645 * SQRT(AVG(LeadTime) * POWER(STDEV(DailyDemand), 2))) as ReorderPoint
FROM Sales_Inventory_Data
GROUP BY ProductID;
      `,
      python: `
import numpy as np

def calculate_safety_stock(avg_demand, std_dev_demand, avg_lead_time, service_level=1.645):
    # Safety Stock formula: Z * sqrt(LT * std_demand^2)
    safety_stock = service_level * np.sqrt(avg_lead_time * (std_dev_demand ** 2))
    return round(safety_stock, 0)

# Apply to inventory dataframe
inventory_df['SafetyStock'] = inventory_df.apply(
    lambda x: calculate_safety_stock(x['AvgDemand'], x['StdDevDemand'], x['LeadTime']), 
    axis=1
)
      `,
      tools: ["PostgreSQL", "Python (NumPy/Pandas)", "Tableau", "AWS S3"]
    },
    githubUrl: "https://github.com/palurvashi2004-rgb/Supply-Chain-Inventory-Optimization-Analysis"
  }
];
