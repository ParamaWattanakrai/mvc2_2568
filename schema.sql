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
    reporter_id TEXT NOT NULL,
    rumour_id INTEGER NOT NULL,
    report_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    report_type TEXT CHECK(report_type IN ('บิดเบือน', 'ปลุกปั่น', 'ข้อมูลเท็จ')),
    reporter_note TEXT,
    FOREIGN KEY (reporter_id) REFERENCES Users(user_id),
    FOREIGN KEY (rumour_id) REFERENCES Rumours(rumour_id),
    UNIQUE(reporter_id, rumour_id)
);