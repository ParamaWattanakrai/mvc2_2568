CREATE TABLE Users (
    user_id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT CHECK(role IN ('General', 'Verifier'))
);

CREATE TABLE Rumours (
    rumour_id INTEGER PRIMARY KEY,
    topic TEXT NOT NULL,
    source TEXT,
    created_at DATETIME,
    credibility_score INTEGER,
    status TEXT DEFAULT 'Normal' -- Normal / Panic
);

CREATE TABLE Reports (
    report_id INTEGER PRIMARY KEY AUTOINCREMENT,
    reporter_id TEXT,
    rumour_id INTEGER,
    report_date DATETIME,
    report_type TEXT, -- Distorted / Incite / Fake
    UNIQUE(reporter_id, rumour_id)
);