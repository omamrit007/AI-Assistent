#!/bin/bash

echo "🚀 Creating AI Copilot project structure..."

# Root folder
# mkdir -p ai-copilot
# cd ai-copilot || exit

# ================= BACKEND =================
mkdir -p backend/app/{routes,services,models,utils}

touch backend/app/main.py
touch backend/app/config.py

touch backend/app/routes/audio.py
touch backend/app/routes/query.py

touch backend/app/services/stt.py
touch backend/app/services/llm.py
touch backend/app/services/memory.py
touch backend/app/services/detector.py

touch backend/app/models/schema.py

touch backend/app/utils/formatter.py

touch backend/requirements.txt

# ================= FRONTEND =================
mkdir -p frontend/public
mkdir -p frontend/src/{components,hooks,services}
mkdir -p frontend/electron

touch frontend/src/App.jsx

touch frontend/src/components/Overlay.jsx
touch frontend/src/components/AnswerBox.jsx

touch frontend/src/hooks/useAudio.js
touch frontend/src/hooks/useHotkeys.js

touch frontend/src/services/api.js

touch frontend/electron/main.js
touch frontend/electron/preload.js

# ================= ROOT FILES =================
touch docker-compose.yml
touch README.md

echo "✅ Project structure created successfully!"