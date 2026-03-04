# Proje Plani

```json
{
  "project": {
    "name": "AI Marketing Dashboard",
    "description": "Modern SaaS marketing dashboard for monitoring AI agents in real-time",
    "version": "1.0.0",
    "tech_stack": {
      "frontend": ["React", "Vite", "TailwindCSS", "TypeScript"],
      "backend": ["Node.js", "Express", "TypeScript"],
      "database": "PostgreSQL",
      "deployment": {
        "frontend": "Vercel",
        "backend": "Railway"
      }
    }
  },
  "system_architecture": {
    "frontend": {
      "framework": "React with Vite",
      "routing": "React Router v6",
      "state_management": "Zustand",
      "ui_components": "Custom with TailwindCSS",
      "real_time": "Socket.io Client",
      "charts": "Recharts",
      "animations": "Framer Motion"
    },
    "backend": {
      "server": "Express.js",
      "authentication": "JWT",
      "real_time": "Socket.io",
      "orm": "Prisma",
      "validation": "Zod",
      "cors": "CORS middleware"
    },
    "database": {
      "type": "PostgreSQL",
      "connection": "Prisma Client",
      "migrations": "Prisma Migrate"
    }
  },
  "database_schema": {
    "tables": [
      {
        "name": "users",
        "fields": {
          "id": "UUID PRIMARY KEY",
          "email": "VARCHAR(255) UNIQUE NOT NULL",
          "password": "VARCHAR(255) NOT NULL",
          "name": "VARCHAR(100) NOT NULL",
          "avatar": "TEXT",
          "role": "ENUM('admin', 'user')",
          "created_at": "TIMESTAMP DEFAULT NOW()",
          "updated_at": "TIMESTAMP DEFAULT NOW()"
        }
      },
      {
        "name": "brands",
        "fields": {
          "id": "UUID PRIMARY KEY",
          "name": "VARCHAR(100) NOT NULL",
          "description": "TEXT",
          "logo": "TEXT",
          "website": "TEXT",
          "user_id": "UUID REFERENCES users(id)",
          "created_at": "TIMESTAMP DEFAULT NOW()",
          "updated_at": "TIMESTAMP DEFAULT NOW()"
        }
      },
      {
        "name": "agents",
        "fields": {
          "id": "UUID PRIMARY KEY",
          "name": "VARCHAR(100) NOT NULL",
          "type": "ENUM('seo', 'ads', 'lead', 'content')",
          "status": "ENUM('running', 'idle', 'error')",
          "brand_id": "UUID REFERENCES brands(id)",
          "config": "JSONB",
          "last_execution": "TIMESTAMP",
          "tasks_completed_today": "INTEGER DEFAULT 0",
          "created_at": "TIMESTAMP DEFAULT NOW()",
          "updated_at": "TIMESTAMP DEFAULT NOW()"
        }
      },
      {
        "name": "activities",
        "fields": {
          "id": "UUID PRIMARY KEY",
          "agent_id": "UUID REFERENCES agents(id)",
          "action": "VARCHAR(255) NOT NULL",
          "description": "TEXT",
          "metadata": "JSONB",
          "status": "ENUM('success', 'error', 'pending')",
          "created_at": "TIMESTAMP DEFAULT NOW()"
        }
      },
      {
        "name": "metrics",
        "fields": {
          "id": "UUID PRIMARY KEY",
          "brand_id": "UUID REFERENCES brands(id)",
          "agent_id": "UUID REFERENCES agents(id)",
          "metric_type": "VARCHAR(50)",
          "value": "DECIMAL",
          "date": "DATE",
          "created_at": "TIMESTAMP DEFAULT NOW()"
        }
      }
    ]
  },
  "api_structure": {
    "base_url": "/api/v1",
    "endpoints": [
      {
        "path": "/auth",
        "methods": {
          "POST /login": "Authenticate user",
          "POST /register": "Register new user",
          "POST /logout": "Logout user",
          "GET /me": "Get current user"
        }
      },
      {
        "path": "/dashboard",
        "methods": {
          "GET /stats": "Get dashboard statistics",
          "GET /activity": "Get recent activities",
          "GET /performance": "Get performance metrics"
        }
      },
      {
        "path": "/agents",
        "methods": {
          "GET /": "List all agents",
          "POST /": "Create new agent",
          "GET /:id": "Get agent details",
          "PUT /:id": "Update agent",
          "DELETE /:id": "Delete agent",
          "POST /:id/start": "Start agent",
          "POST /:id/stop": "Stop agent"
        }
      },
      {
        "path": "/brands",
        "methods": {
          "GET /": "List all brands",
          "POST /": "Create new brand",
          "GET /:id": "Get brand details",
          "PUT /:id": "Update brand",
          "DELETE /:id": "Delete brand"
        }
      },
      {
        "path": "/activities",
        "methods": {
          "GET /": "List activities with pagination",
          "GET /:id": "Get activity details"
        }
      },
      {
        "path": "/analytics",
        "methods": {
          "GET /metrics": "Get analytics metrics",
          "GET /charts": "Get chart data",
          "GET /reports": "Get reports"
        }
      }
    ]
  },
  "project_structure": {
    "root": {
      "files": [
        "package.json",
        "README.md",
        ".gitignore",
        "docker-compose.yml"
      ],
      "directories": {
        "frontend": {
          "files": [
            "package.json",
            "vite.config.ts",
            "tailwind.config.js",
            "postcss.config.js",
            "tsconfig.json",
            "index.html",
            ".env.example"
          ],
          "directories": {
            "src": {
              "files": ["main.tsx", "App.tsx", "index.css"],
              "directories": {
                "components": {
                  "files": [],
                  "directories": {
                    "common": ["Sidebar.tsx", "Topbar.tsx", "Layout.tsx"],
                    "dashboard": ["DashboardStats.tsx", "ActivityFeed.tsx", "PerformanceChart.tsx"],
                    "agents": ["AgentCard.tsx", "AgentList.tsx", "AgentModal.tsx"],
                    "brands": ["BrandCard.tsx", "BrandList.tsx", "BrandModal.tsx"],
                    "analytics": ["MetricsChart.tsx", "ReportsTable.tsx"],
                    "ui": ["Button.tsx", "Modal.tsx", "Input.tsx", "Card.tsx"]
                  }
                },
                "pages": ["Dashboard.tsx", "Agents.tsx", "Brands.tsx", "Analytics.tsx", "Settings.tsx"],
                "hooks": ["useAuth.tsx", "useSocket.tsx", "useApi.tsx"],
                "stores": ["authStore.ts", "dashboardStore.ts", "agentStore.ts"],
                "types": ["index.ts", "api.ts", "dashboard.ts"],
                "utils": ["api.ts", "socket.ts", "helpers.ts"],
                "styles": ["globals.css"]
              }
            }
          }
        },
        "backend": {
          "files": [
            "package.json",
            "tsconfig.json",
            ".env.example",
            "Dockerfile"
          ],
          "directories": {
            "src": {
              "files": ["app.ts", "server.ts"],
              "directories": {
                "controllers": ["authController.ts", "dashboardController.ts", "agentController.ts", "brandController.ts", "analyticsController.ts"],
                "middleware": ["auth.ts", "cors.ts", "errorHandler.ts", "validation.ts"],
                "routes": ["auth.ts", "dashboard.ts", "agents.ts", "brands.ts", "analytics.ts"],
                "services": ["authService.ts", "agentService.ts", "socketService.ts"],
                "types": ["index.ts", "express.d.ts"],
                "utils": ["database.ts", "jwt.ts", "logger.ts"],
                "config": ["database.ts", "redis.ts", "socket.ts"]
              }
            },
            "prisma": ["schema.prisma", "seed.ts"],
            "migrations": []
          }
        }
      }
    }
  },
  "package_configurations": {
    "frontend_package_json": {
      "name": "ai-marketing-dashboard-frontend",
      "version": "1.0.0",
      "type": "module",
      "scripts": {
        "dev": "vite",
        "build": "tsc && vite build",
        "preview": "vite preview",
        "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
      },
      "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.8.0",
        "zustand": "^4.3.6",
        "socket.io-client": "^4.6.1",
        "recharts": "^2.5.0",
        "framer-motion": "^10.8.4",
        "lucide-react": "^0.323.0",
        "clsx": "^1.2.1",
        "tailwind-merge": "^1.10.0",
        "axios": "^1.3.4",
        "react-hot-toast": "^2.4.0",
        "date-fns": "^2.29.3"
      },
      "devDependencies": {
        "@types/react": "^18.0.28",
        "@types/react-dom": "^18.0.11",
        "@typescript-eslint/eslint-plugin": "^5.57.1",
        "@typescript-eslint/parser": "^5.57.1",
        "@vitejs/plugin-react": "^4.0.0",
        "autoprefixer": "^10.4.14",
        "eslint": "^8.38.0",
        "eslint-plugin-react-hooks": "^4.6.0",
        "eslint-plugin-react-refresh": "^0.3.4",
        "postcss": "^8.4.21",
        "tailwindcss": "^3.3.0",
        "typescript": "^5.0.2",
        "vite": "^4.3.2"
      }
    },
    "backend_package_json": {
      "name": "ai-marketing-dashboard-backend",
      "version": "1.0.0",
      "main": "dist/server.js",
      "scripts": {
        "dev": "tsx watch src/server.ts",
        "build": "tsc",
        "start": "node dist/server.js",
        "db:generate": "prisma generate",
        "db:push": "prisma db push",
        "db:migrate": "prisma migrate dev",
        "db:seed": "tsx prisma/seed.ts"
      },
      "dependencies": {
        "express": "^4.18.2",
        "cors": "^2.8.5",
        "helmet": "^6.0.1",
        "morgan": "^1.10.0",
        "bcryptjs": "^2.4.3",
        "jsonwebtoken": "^9.0.0",
        "socket.io": "^4.6.1",
        "prisma": "^4.13.0",
        "@prisma/client": "^4.13.0",
        "zod": "^3.21.4",
        "dotenv": "^16.0.3",
        "winston": "^3.8.2",
        "uuid": "^9.0.0"
      },
      "devDependencies": {
        "@types/express": "^4.17.17",
        "@types/cors": "^2.8.13",
        "@types/morgan": "^1.9.4",
        "@types/bcryptjs": "^2.4.2",
        "@types/jsonwebtoken": "^9.0.1",
        "@types/node": "^18.15.11",
        "@types/uuid": "^9.0.1",
        "tsx": "^3.12.6",
        "typescript": "^5.0.2"
      }
    }
  },
  "environment_variables": {
    "frontend": {
      "VITE_API_URL": "http://localhost:3001/api/v1",
      "VITE_SOCKET_URL": "http://localhost:3001"
    },
    "backend": {
      "PORT": "3001",
      "NODE_ENV": "development",
      "DATABASE_URL": "postgresql://username:password@localhost:5432/ai_marketing_db",
      "JWT_SECRET": "your-super-secret-jwt-key",
      "JWT_EXPIRES_IN": "7d",
      "CORS_ORIGIN": "http://localhost:5173"
    }
  },
  "deployment_config": {
    "vercel_frontend": {
      "file": "vercel.json",
      "content": {
        "version": 2,
        "builds": [
          {
            "src": "dist/**",
            "use": "@vercel/static"
          }
        ],
        "routes": [
          {
            "src": "/(.*)",
            "dest": "/index.html"
          }
        ],
        "env": {
          "VITE_API_URL": "https://your-backend-url.railway.app/api/v1",
          "VITE_SOCKET_URL": "https://your-backend-url.railway.app"
        }
      }
    },
    "railway_backend": {
      "file": "railway.toml",
      "content": {
        "build": {
          "builder": "NIXPACKS"
        },
        "deploy": {
          "startCommand": "npm run start",
          "healthcheckPath": "/health",
          "healthcheckTimeout": 100,
          "restartPolicyType": "ON_FAILURE",
          "restartPolicyMaxRetries": 10
        }
      }
    }
  },
  "key_components": {
    "frontend": [
      {
        "name": "Layout.tsx",
        "purpose": "Main layout with sidebar and topbar",
        "features": ["Responsive design", "Dark mode", "Glassmorphism"]
      },
      {
        "name": "Dashboard.tsx",
        "purpose": "Main dashboard page",
        "features": ["Real-time updates", "Activity feed", "Metrics cards"]
      },
      {
        "name": "AgentCard.tsx",
        "purpose": "Agent status display",
        "features": ["Status indicators", "Action buttons", "Micro animations"]
      },
      {
        "name": "useSocket.tsx",
        "purpose": "Real-time communication hook",
        "features": ["Connection management", "Event handling", "Auto reconnect"]
      }
    ],
    "backend": [
      {
        "name": "socketService.ts",
        "purpose": "Real-time event management",
        "features": ["Room management", "Event broadcasting", "Connection tracking"]
      },
      {
        "name": "agentController.ts",
        "purpose": "Agent management API",
        "features": ["CRUD operations", "Status updates", "Real-time notifications"]
      },
      {
        "name": "authMidd