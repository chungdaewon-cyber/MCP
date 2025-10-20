# CLAUDE.md - 통합 개발 가이드

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 필요한 통합 가이드를 제공합니다.

---

## 📋 목차

### 🏢 프로젝트 개요
- [워크스페이스 개요](#워크스페이스-개요)
- [프로젝트별 명령어](#프로젝트별-명령어)
- [개발 환경 설정](#개발-환경-설정)

### 🏗️ 아키텍처 & 설계
- [설계 원칙](#🎯-설계-원칙-strict)
- [컴포넌트 아키텍처](#🏗️-컴포넌트-아키텍처)
- [SSR/클라이언트 컴포넌트](#🚀-ssrcllient-component-architecture)
- [데이터베이스 통합](#💾-데이터베이스-통합-가이드)
- [API 설계](#🌐-api-설계-원칙)

### 🤖 AI/ML 통합
- [AI 우선 원칙](#🤖-aiml-통합-및-텍스트-처리-가이드)
- [모델 선택 및 최적화](#🔧-ai-모델-선택-기준)
- [프롬프트 엔지니어링](#📝-프롬프트-엔지니어링-표준)

### 🛠️ 개발 워크플로우
- [패키지 관리](#📦-패키지-관리)
- [개발 워크플로우](#📝-개발-워크플로우-mandatory)
- [Git 워크플로우](#🔧-git-워크플로우)
- [테스팅 전략](#🧪-테스팅-전략)

### 🚀 배포 & 운영
- [환경 변수 관리](#🔗-환경-변수)
- [배포 가이드](#🚢-배포)
- [모니터링 & 로깅](#📊-모니터링--로깅)
- [보안 체크리스트](#🔐-보안-체크리스트)

### ⚙️ 특수 설정
- [MCP 설치 가이드](#🔌-mcp-model-context-protocol-설치-가이드)
- [문제 해결](#🛠️-문제-해결)

---

## 워크스페이스 개요

다양한 프로젝트가 포함된 개발자 워크스페이스입니다:

- **ai-interview-service**: 한국어 기반 웹 AI 가상 면접 시스템
- **laptop-automation**: 음성 제어 기능이 있는 AI 기반 컴퓨터 자동화 플랫폼
- **_Book_Claude-Code**: Claude Code 책을 위한 학습 자료 및 예제
- 다양한 독립 실행형 Python 스크립트 및 HTML 파일

## 프로젝트별 명령어

### AI 면접 서비스 (`ai-interview-service/`)
```bash
npm run dev     # Vite 개발 서버 시작 (http://localhost:5173)
npm run build   # Vite로 프로덕션 번들 빌드
npm run preview # 프로덕션 빌드 미리보기
npm run serve   # 5173 포트에서 프로덕션 빌드 서빙
```

**기술 스택**: Vanilla JavaScript + HTML + CSS, Vite 빌드 시스템
**주요 기능**: 음성 인식, 텍스트 입력, AI 기반 면접 시뮬레이션

### 랩톱 자동화 (`laptop-automation/`)
```bash
python main.py              # 메인 자동화 웹 인터페이스 시작 (http://localhost:8080)
python demo_scenarios.py    # 데모 시나리오 실행
pip install -r requirements.txt  # Python 의존성 설치
python -m pytest tests/     # 테스트 실행 (테스트 디렉토리가 있는 경우)
```

**기술 스택**: Python with Flask, PyAutoGUI, OpenCV, 음성 인식, AI 비전
**주요 기능**: 화면 캡처, 컴퓨터 제어, 음성 명령, 웹 인터페이스

### Book Claude Code (`_Book_Claude-Code/`)
주차별로 구성된 구조화된 학습 자료를 포함합니다. 각 주차는 일일 콘텐츠와 예제를 제공합니다.
- 개별 프로젝트에는 구체적인 지침이 담긴 자체 CLAUDE.md 파일이 있습니다
- React 앱, Express API, 마이크로서비스, 자동화 시스템 예제를 다룹니다

## 개발 환경 설정

### 필수 요구사항
- **Node.js**: ai-interview-service에 필요 (Vite 기반)
- **Python 3.8+**: laptop-automation에 필요
- **시스템 패키지** (laptop-automation용):

```bash
# Ubuntu/Debian
sudo apt-get install tesseract-ocr tesseract-ocr-kor
sudo apt-get install portaudio19-dev python3-pyaudio
sudo apt-get install scrot xdotool
```

### 일반적인 개발 작업
- **웹 프로젝트**: 개발 서버용 `npm run dev` 사용
- **Python 프로젝트**: `pip install -r requirements.txt`로 의존성 설치
- **화면 자동화**: 화면 캡처 및 입력 제어를 위한 시스템 권한 필요

---

## 🎯 설계 원칙 (STRICT)

1. **NO raw HTML elements** - Use UI library components only (MUI Surface/Box replaces div)
2. **200 lines max per file** - Aggressively split components into smaller files
3. **DRY everything** - Reusable components and hooks, never duplicate code
4. **Atomic Design** - Atoms → Molecules → Organisms → Templates
5. **Type-safe** - Full TypeScript, no `any` types allowed
6. **SSR First** - Use Next.js SSR/ISR for performance, minimize "use client"
7. **Component Composition** - Build complex from simple, prefer composition over inheritance
8. **Client Components Minimized** - Always prefer SSR, use "use client" sparingly
9. **NO FALLBACKS OR WORKAROUNDS** - Never use setTimeout, fallback patterns, or workarounds
10. **NO COMPROMISES** - Fix root causes, not symptoms. No shortcuts or band-aid solutions

## 📦 패키지 관리

**CRITICAL: Always use the same package manager consistently**
- Check for `yarn.lock` → use `yarn`
- Check for `package-lock.json` → use `npm`
- **NEVER mix** npm and yarn in the same project

### Yarn Projects
```bash
yarn dev              # Start development server
yarn build            # Production build
yarn add <package>    # Install dependency
yarn remove <package> # Remove dependency
```

### NPM Projects
```bash
npm run dev           # Start development server
npm run build         # Production build
npm install <package> # Install dependency
npm uninstall <package> # Remove dependency
```

## 🏗️ 컴포넌트 아키텍처

### File Size & Modularity
- **Keep files short**: Aim for <200 lines per component file
- **Single responsibility**: Each component should have one clear purpose
- **Extract when growing**: Split into smaller pieces when approaching 200 lines
- **Avoid monolithic components**: Break down complex UIs into composable parts

### Component Organization
```
src/
├── components/
│   ├── ui/              # Design system components (Button, Card, Input, Dialog)
│   ├── layout/          # Layout components (Header, Sidebar, Footer)
│   └── feature/         # Feature-specific components
├── lib/                 # Utility functions and configurations
├── hooks/               # Custom React hooks
└── types/               # TypeScript type definitions
```

### 🏷️ Naming Conventions (CRITICAL for Linux Compatibility)
- **ALWAYS use lowercase** for all folders and files
- **Use kebab-case** for multi-word names (e.g., `ai-economic-order`, not `AIEconomicOrder`)
- **Never use PascalCase or camelCase** in file/folder names
- **This is required** for Linux deployment compatibility
- Apply to all new components, pages, and directories

## 🚀 SSR/Client Component Architecture

### Default: Server Components (Preferred)

**Server Component Pattern:**
```typescript
// components/organisms/EmailList/EmailList.tsx
// DEFAULT: No "use client" directive = Server Component
import { Surface, Text } from "@/components/atoms";

export function EmailList({ emails }: { emails: Email[] }) {
  return (
    <Surface>
      {emails.map((email) => (
        <EmailCard key={email.id} email={email} />
      ))}
    </Surface>
  );
}
```

### Client Components (Use Sparingly)

**When to Use "use client":**
- Event handlers (onClick, onSubmit, etc.)
- React state (useState, useReducer)
- React effects (useEffect, useLayoutEffect)
- Browser-only APIs (localStorage, window, document)
- Third-party libraries requiring client-side

**Minimal Client Component Pattern:**
```typescript
// components/atoms/InteractiveButton/InteractiveButton.tsx
"use client"; // ONLY when absolutely necessary

import { useState } from "react";
import { Button } from "@mui/material";

export function InteractiveButton({ onClick, ...props }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async (event) => {
    setLoading(true);
    await onClick?.(event);
    setLoading(false);
  };

  return <Button {...props} onClick={handleClick} disabled={loading} />;
}
```

### 🔥 Hydration Error Prevention (CRITICAL)

**NEVER create hydration mismatches:**

#### Forbidden Patterns:
- ❌ `Date.now()`, `Math.random()` or any non-deterministic values in render
- ❌ `typeof window !== 'undefined'` conditional rendering
- ❌ Browser-specific APIs in initial render (localStorage, sessionStorage)
- ❌ Invalid HTML nesting (divs in p tags, etc.)

#### Required Patterns:
- ✅ Use `useEffect` for client-only code after hydration
- ✅ Use `useState` with consistent initial values across server/client
- ✅ Use `suppressHydrationWarning={true}` ONLY for unavoidable browser differences
- ✅ Use Next.js `dynamic()` with `ssr: false` for client-only components

#### Example Safe Patterns:
```typescript
// ✅ Safe: Consistent across server/client
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return <div>Loading...</div>;

// ✅ Safe: Client-only component
const ClientComponent = dynamic(() => import('./ClientOnly'), { ssr: false });

// ✅ Safe: Fixed seed values for demo data
const DEMO_SEEDS = [
  { id: 'demo-1', value: 123, date: '2024-01-01' },
  { id: 'demo-2', value: 456, date: '2024-01-02' }
];
```

---

## 💾 데이터베이스 통합 가이드

### 데이터베이스 선택 기준

#### PostgreSQL (Recommended for ACID transactions)
```typescript
// lib/database/postgres.ts
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

export { pool };
```

#### MongoDB (For document-based data)
```typescript
// lib/database/mongodb.ts
import { MongoClient } from 'mongodb';

let client: MongoClient | null = null;

export async function getMongoClient() {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
  }
  return client;
}
```

### ORM/ODM 패턴

#### Prisma (PostgreSQL)
```typescript
// prisma/schema.prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

#### Mongoose (MongoDB)
```typescript
// lib/models/User.ts
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
```

### 데이터 검증 및 보안

#### Zod 스키마 검증
```typescript
// lib/validations/user.ts
import { z } from 'zod';

export const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(50),
  password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/),
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;
```

#### SQL Injection 방지
```typescript
// ✅ Good: Parameterized queries
const getUserById = async (id: string) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

// ❌ Bad: String concatenation
const getUserById = async (id: string) => {
  const result = await pool.query(`SELECT * FROM users WHERE id = '${id}'`);
  return result.rows[0];
};
```

---

## 🌐 API 설계 원칙

### RESTful API 표준

#### HTTP 메서드 사용법
```typescript
// pages/api/users/[id].ts
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      return getUserById(id as string, res);
    case 'PUT':
      return updateUser(id as string, req.body, res);
    case 'DELETE':
      return deleteUser(id as string, res);
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).end('Method Not Allowed');
  }
}
```

#### 일관된 응답 형식
```typescript
// lib/api/response.ts
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export function successResponse<T>(data: T, message?: string): ApiResponse<T> {
  return { success: true, data, message };
}

export function errorResponse(error: string, statusCode = 400): ApiResponse {
  return { success: false, error };
}
```

#### API 버전 관리
```typescript
// pages/api/v1/users.ts vs pages/api/v2/users.ts
// lib/api/versions.ts
export const API_VERSIONS = {
  V1: 'v1',
  V2: 'v2',
  CURRENT: 'v2'
} as const;
```

### GraphQL (선택사항)

#### Apollo Server 설정
```typescript
// pages/api/graphql.ts
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ user: getUser(req) })
});

export default startServerAndCreateNextHandler(server);
```

---

## 🤖 AI/ML 통합 및 텍스트 처리 가이드

### 🎯 AI 우선 원칙 (CRITICAL)

1. **텍스트 처리는 무조건 AI 사용** - 키워드 기반이나 규칙 기반 접근법 금지
2. **AI가 가능한 모든 작업에 AI 활용** - 분류, 요약, 분석, 번역, 감정 분석 등
3. **예외 없음** - 간단해 보이는 텍스트 작업도 AI로 처리
4. **휴먼 인 더 루프** - 중요한 결정에는 인간 검토 단계 포함

### 🔧 AI 모델 선택 기준

#### Primary Models (우선 사용)
```typescript
const AI_MODELS = {
  // 텍스트 생성 및 분석 (높은 품질, 적당한 비용)
  primary: {
    provider: 'anthropic',
    model: 'claude-3-5-sonnet-20241022',
    useCase: ['complex-reasoning', 'long-context', 'code-generation']
  },

  // 빠른 분류 및 간단한 작업 (저비용, 빠른 응답)
  lightweight: {
    provider: 'google',
    model: 'gemini-1.5-flash',
    useCase: ['classification', 'quick-summary', 'simple-qa']
  },

  // 대용량 처리 (배치 작업)
  batch: {
    provider: 'openai',
    model: 'gpt-4o-mini',
    useCase: ['bulk-processing', 'data-labeling']
  }
};

function selectModel(task: AITask): ModelConfig {
  if (task.complexity === 'high' || task.contextLength > 50000) {
    return AI_MODELS.primary;
  }

  if (task.type === 'classification' || task.responseTime === 'critical') {
    return AI_MODELS.lightweight;
  }

  if (task.volume > 1000 || task.priority === 'batch') {
    return AI_MODELS.batch;
  }

  return AI_MODELS.primary; // Default fallback
}
```

### 📝 프롬프트 엔지니어링 표준

#### Prompt Template Structure
```typescript
interface PromptTemplate {
  system: string;     // 역할 및 컨텍스트 정의
  context: string;    // 관련 정보 및 배경
  task: string;       // 구체적인 작업 지시
  format: string;     // 출력 형식 명시
  examples?: string;  // Few-shot 예시 (선택사항)
  constraints: string; // 제약사항 및 주의사항
}

const EMAIL_CLASSIFICATION_PROMPT: PromptTemplate = {
  system: "You are an expert email classifier for business communications.",
  context: "Classify emails into categories: urgent, normal, spam, newsletter, support.",
  task: "Analyze the following email and determine its category.",
  format: "Return only the category name in lowercase.",
  constraints: "Must be one of: urgent, normal, spam, newsletter, support"
};
```

#### Prompt Best Practices
```typescript
// ✅ Good: Specific, structured, with clear format
const goodPrompt = `
System: You are a professional email summarizer.

Task: Summarize the key points of this email in exactly 3 bullet points.

Format:
• [Action item or key point]
• [Action item or key point]
• [Action item or key point]

Constraints:
- Each bullet point must be under 50 characters
- Focus on actionable items
- Use active voice

Email: ${emailContent}
`;

// ❌ Bad: Vague, no structure, unclear format
const badPrompt = `Summarize this email: ${emailContent}`;
```

### 🏗️ AI Integration Architecture

#### Service Layer Pattern
```typescript
// ai/services/TextProcessingService.ts
export class TextProcessingService {
  private models: Map<string, AIProvider>;
  private cache: CacheService;
  private rateLimiter: RateLimiter;

  async classifyText(
    text: string,
    categories: string[],
    confidence: number = 0.8
  ): Promise<ClassificationResult> {
    const cacheKey = this.generateCacheKey('classify', text, categories);

    // Check cache first
    const cached = await this.cache.get(cacheKey);
    if (cached) return cached;

    // Rate limiting
    await this.rateLimiter.waitIfNeeded();

    const model = this.selectModel({
      type: 'classification',
      complexity: 'low',
      responseTime: 'fast'
    });

    const result = await model.classify(text, categories);

    // Cache if confidence is high
    if (result.confidence >= confidence) {
      await this.cache.set(cacheKey, result, '1h');
    }

    return result;
  }
}
```

#### Component Integration Pattern
```typescript
// hooks/useAITextProcessing.ts
export function useAITextProcessing() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processText = useCallback(async (
    text: string,
    operation: 'summarize' | 'classify' | 'translate'
  ) => {
    setLoading(true);
    setError(null);

    try {
      const service = new TextProcessingService();

      switch (operation) {
        case 'summarize':
          return await service.summarize(text);
        case 'classify':
          return await service.classify(text);
        case 'translate':
          return await service.translate(text);
        default:
          throw new Error(`Unsupported operation: ${operation}`);
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { processText, loading, error };
}
```

### 💰 비용 최적화 전략

#### Caching Strategy
```typescript
interface CacheConfig {
  shortTerm: {
    ttl: '15m';
    useFor: ['classification', 'simple-qa'];
  };
  mediumTerm: {
    ttl: '4h';
    useFor: ['summarization', 'translation'];
  };
  longTerm: {
    ttl: '24h';
    useFor: ['analysis', 'complex-reasoning'];
  };
}

// Implement semantic caching for similar inputs
class SemanticCache {
  async getSimilar(text: string, threshold: number = 0.9): Promise<CachedResult | null> {
    const embedding = await this.generateEmbedding(text);
    return await this.findSimilarEmbedding(embedding, threshold);
  }
}
```

#### Token Optimization
```typescript
// Token counting and optimization
function optimizePrompt(prompt: string, maxTokens: number): string {
  let optimized = prompt;

  // Remove redundant whitespace
  optimized = optimized.replace(/\s+/g, ' ').trim();

  // Truncate if necessary (smart truncation)
  if (this.countTokens(optimized) > maxTokens) {
    optimized = this.smartTruncate(optimized, maxTokens);
  }

  return optimized;
}

// Batch processing for cost efficiency
async function processBatch<T>(
  items: T[],
  processor: (batch: T[]) => Promise<any[]>,
  batchSize: number = 10
): Promise<any[]> {
  const results = [];

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await processor(batch);
    results.push(...batchResults);

    // Rate limiting between batches
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  return results;
}
```

### 🛡️ 에러 처리 및 신뢰성

#### Retry Logic with Exponential Backoff
```typescript
class AIServiceWithRetry {
  async callWithRetry<T>(
    operation: () => Promise<T>,
    maxRetries: number = 3,
    baseDelay: number = 1000
  ): Promise<T> {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        if (attempt === maxRetries) throw error;

        // Exponential backoff
        const delay = baseDelay * Math.pow(2, attempt - 1);
        await new Promise(resolve => setTimeout(resolve, delay));

        console.warn(`AI operation failed, retrying in ${delay}ms (attempt ${attempt}/${maxRetries})`);
      }
    }
    throw new Error('Max retries exceeded');
  }
}
```

#### Response Validation
```typescript
interface AIResponse {
  content: string;
  confidence: number;
  metadata?: Record<string, any>;
}

function validateAIResponse(response: AIResponse, expectedFormat?: string): boolean {
  // Basic validation
  if (!response.content || response.confidence < 0.5) {
    return false;
  }

  // Format validation if specified
  if (expectedFormat) {
    switch (expectedFormat) {
      case 'json':
        try {
          JSON.parse(response.content);
        } catch {
          return false;
        }
        break;
      case 'email':
        if (!response.content.includes('@')) return false;
        break;
    }
  }

  return true;
}
```

---

## 📝 개발 워크플로우 (MANDATORY)

### For Every Change:

1. **Code Review**: Review the changes you made
   - Check for code quality issues
   - Verify type safety
   - Ensure best practices are followed
   - Look for potential bugs or edge cases

2. **Build**: Run production build to catch errors
   ```bash
   yarn build  # or npm run build
   ```
   - Fix any TypeScript errors
   - Fix any build errors
   - Ensure all imports are correct

3. **Unit Tests**: Run tests if applicable
   ```bash
   yarn test  # or npm test
   ```

4. **Commit and Push**: Only after build succeeds
   ```bash
   git add .
   git commit -m "descriptive commit message"
   git push
   ```

**Why this is essential:**
- Catches TypeScript errors and build issues early
- Ensures deployment will succeed
- Validates all components compile correctly
- Prevents deployment failures
- Maintains code quality

**IMPORTANT**: Never skip the build step. If build fails, fix the errors before committing.

## 🔧 Git 워크플로우

**ALWAYS follow these steps for ALL changes:**
```bash
# 1. Review changes
git diff

# 2. Stage files
git add <files>

# 3. Commit with descriptive message
git commit -m "descriptive message"

# 4. Push to remote
git push
```

### Commit Message Convention
```bash
# Format: <type>(<scope>): <description>
feat(auth): add JWT authentication
fix(api): resolve user validation error
docs(readme): update installation instructions
refactor(components): extract reusable Button component
```

## 🧪 테스팅 전략

### Component Testing
```bash
# Use React Testing Library + Jest
yarn add -D @testing-library/react @testing-library/jest-dom jest

# Test files next to components
Surface/
  ├── Surface.tsx
  ├── Surface.test.tsx
  └── index.ts
```

### Testing Requirements:
- **Unit tests** for all components
- **Coverage**: Aim for >80% test coverage
- **Test structure**: Place test files next to components
- **Fail-fast**: Tests must pass before build/commit

### API Testing
```typescript
// tests/api/users.test.ts
import { createMocks } from 'node-mocks-http';
import handler from '../../pages/api/users';

describe('/api/users', () => {
  it('should return users list', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        success: true,
        data: expect.arrayContaining([])
      })
    );
  });
});
```

---

## 🔗 환경 변수

### Naming Convention:
- `NEXT_PUBLIC_*` for client-side variables (Next.js)
- All other variables are server-side only
- Never commit `.env.local` to git
- Provide `.env.example` template

### Required Variables (Template):
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
MONGODB_URI="mongodb://localhost:27017/mydb"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
JWT_SECRET="your-jwt-secret"

# AI API Keys
ANTHROPIC_API_KEY="your-anthropic-key"
OPENAI_API_KEY="your-openai-key"
GOOGLE_AI_API_KEY="your-google-ai-key"

# Firebase (if applicable)
NEXT_PUBLIC_FIREBASE_API_KEY="your-firebase-key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-project.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"

# External Services
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"

# App Config
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

### Environment-specific Configurations
```typescript
// lib/config.ts
const config = {
  development: {
    apiUrl: 'http://localhost:3000/api',
    logLevel: 'debug'
  },
  production: {
    apiUrl: 'https://yourapp.com/api',
    logLevel: 'error'
  },
  test: {
    apiUrl: 'http://localhost:3000/api',
    logLevel: 'silent'
  }
};

export default config[process.env.NODE_ENV as keyof typeof config];
```

---

## 🚢 배포

### Pre-Deploy Checklist:
- [ ] All tests passing
- [ ] Build successful
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] Security review completed
- [ ] Performance benchmarks met
- [ ] Cost impact assessed
- [ ] Monitoring setup verified

### Deployment Strategies

#### Vercel (Next.js)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Set environment variables
vercel env add VARIABLE_NAME
```

#### Docker Deployment
```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### CI/CD Pipeline (GitHub Actions)
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'yarn'

    - name: Install dependencies
      run: yarn install --frozen-lockfile

    - name: Run tests
      run: yarn test

    - name: Build application
      run: yarn build

    - name: Run e2e tests
      run: yarn test:e2e

  deploy:
    needs: test
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

---

## 📊 모니터링 & 로깅

### Application Monitoring

#### Sentry Integration
```typescript
// lib/sentry.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
});

export { Sentry };

// Custom error boundary
export function captureException(error: Error, context?: any) {
  Sentry.captureException(error, { extra: context });
}
```

#### Winston Logging
```typescript
// lib/logger.ts
import winston from 'winston';

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

export { logger };
```

### Performance Monitoring

#### Web Vitals Tracking
```typescript
// lib/analytics.ts
export function reportWebVitals(metric: any) {
  switch (metric.name) {
    case 'FCP':
    case 'LCP':
    case 'CLS':
    case 'FID':
    case 'TTFB':
      // Send to analytics service
      analytics.track('Web Vital', {
        name: metric.name,
        value: metric.value,
        id: metric.id,
        label: metric.label
      });
      break;
  }
}

// pages/_app.tsx
export function reportWebVitals(metric: NextWebVitalsMetric) {
  reportWebVitals(metric);
}
```

### Business Metrics
```typescript
// lib/metrics.ts
export class MetricsCollector {
  static trackUserAction(action: string, properties?: Record<string, any>) {
    analytics.track(action, {
      ...properties,
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
      userId: getCurrentUserId()
    });
  }

  static trackAPICall(endpoint: string, method: string, statusCode: number, duration: number) {
    analytics.track('API Call', {
      endpoint,
      method,
      statusCode,
      duration,
      timestamp: new Date().toISOString()
    });
  }
}
```

---

## 🔐 보안 체크리스트

### Authentication & Authorization

#### JWT Best Practices
```typescript
// lib/auth/jwt.ts
import jwt from 'jsonwebtoken';

export function generateToken(payload: any, expiresIn = '7d') {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn,
    issuer: 'your-app',
    audience: 'your-app-users'
  });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!, {
      issuer: 'your-app',
      audience: 'your-app-users'
    });
  } catch (error) {
    throw new Error('Invalid token');
  }
}
```

#### Rate Limiting
```typescript
// lib/rateLimit.ts
import { LRUCache } from 'lru-cache';

type Options = {
  uniqueTokenPerInterval?: number;
  interval?: number;
};

export default function rateLimit(options: Options = {}) {
  const tokenCache = new LRUCache({
    max: options.uniqueTokenPerInterval || 500,
    ttl: options.interval || 60000,
  });

  return {
    check: (limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= limit;

        return isRateLimited ? reject() : resolve();
      }),
  };
}
```

### Data Validation & Sanitization

#### Input Sanitization
```typescript
// lib/security/sanitize.ts
import DOMPurify from 'isomorphic-dompurify';

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u'],
    ALLOWED_ATTR: []
  });
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 1000); // Limit length
}
```

#### CSRF Protection
```typescript
// lib/security/csrf.ts
import { createHash, randomBytes } from 'crypto';

export function generateCSRFToken(): string {
  return randomBytes(32).toString('hex');
}

export function validateCSRFToken(token: string, secret: string): boolean {
  const hash = createHash('sha256').update(token + secret).digest('hex');
  return hash === token;
}
```

### Security Headers
```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
```

---

## 🔌 MCP (Model Context Protocol) 설치 가이드

### 공통 주의사항
1. 현재 사용 환경을 확인할 것. 모르면 사용자에게 물어볼 것.
2. OS(윈도우,리눅스,맥) 및 환경들(WSL,파워셸,명령프롬프트등)을 파악해서 그에 맞게 세팅할 것.
3. mcp-installer을 이용해 필요한 MCP들을 설치할 것 (user 스코프로 설치 및 적용할것)
4. 특정 MCP 설치시, 바로 설치하지 말고, WebSearch 도구로 해당 MCP의 공식 사이트 확인
5. 공식 사이트 확인 후에는 context7 MCP 존재하는 경우, context7으로 다시 한번 확인할 것
6. MCP 설치 후, task를 통해 디버그 모드로 서브 에이전트 구동한 후, /mcp 를 통해 실제 작동여부를 반드시 확인할 것

### MCP 서버 설치 순서

1. **기본 설치**: mcp-installer를 사용해 설치할 것
2. **설치 후 정상 설치 여부 확인하기**: claude mcp list로 설치 목록 확인
3. **문제 있을때**: claude mcp add 명령어를 통한 직접 설정

### 설정 파일 위치
- **Linux/macOS/WSL**: `~/.claude/` 디렉토리
- **Windows 네이티브**: `C:\Users\{사용자명}\.claude` 디렉토리

### 예시 설정
```json
{
  "youtube-mcp": {
    "type": "stdio",
    "command": "npx",
    "args": ["-y", "youtube-data-mcp-server"],
    "env": {
      "YOUTUBE_API_KEY": "YOUR_API_KEY_HERE",
      "YOUTUBE_TRANSCRIPT_LANG": "ko"
    }
  }
}
```

---

## 🛠️ 문제 해결

### 일반적인 문제 및 해결책

#### 음성 인식 문제
- 최상의 호환성을 위해 Chrome 브라우저 사용
- 마이크 권한 확인
- 정확한 인식을 위한 조용한 환경 확인

#### 화면 자동화 문제
- 화면 캡처 권한 확인
- OCR 언어팩 설치 확인
- 시스템 의존성이 설치되어 있는지 확인

#### 개발 서버 문제
- 포트 가용성 확인 (Vite용 5173, Flask용 8080)
- Node.js/Python 버전 확인
- 필요시 브라우저 캐시 삭제

### 디버깅 모범 사례

#### 로그 분석
```typescript
// lib/debug.ts
export function debugLog(component: string, action: string, data?: any) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[${component}] ${action}:`, data);
  }
}

export function performanceLog(label: string, fn: () => any) {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${label} took ${end - start} milliseconds`);
  return result;
}
```

#### Error Boundaries
```typescript
// components/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    // Send to error reporting service
    captureException(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

---

## 📌 Quick Reference

### Before Starting Any Task:
1. ✅ Check package manager (yarn.lock or package-lock.json)
2. ✅ Review existing components before creating new ones
3. ✅ Consult schema files if working with data
4. ✅ Check for project-specific CLAUDE.md in repository
5. ✅ Verify environment variables are set

### Before Committing:
1. ✅ `git diff` - Review all changes
2. ✅ `yarn build` or `npm run build` - Verify build passes
3. ✅ `yarn test` or `npm test` - Run tests if available
4. ✅ Fix all TypeScript errors
5. ✅ Update schema/documentation if data structures changed
6. ✅ Run linter and formatter

### When Deploying:
1. ✅ All tests passing
2. ✅ Build successful
3. ✅ Environment variables configured
4. ✅ Database migrations applied
5. ✅ Security review completed
6. ✅ Performance benchmarks met
7. ✅ Monitoring setup verified
8. ✅ Cost impact assessed

### Emergency Procedures:
1. **Production Issue**: Check logs, rollback if necessary
2. **Security Breach**: Rotate secrets, notify users, patch vulnerability
3. **Performance Degradation**: Check monitoring, scale resources, optimize queries
4. **Data Loss**: Restore from backup, verify integrity, communicate with stakeholders

---

**Last Updated**: 2025-10-08
**Version**: 2.0.0

이 가이드는 여러 프로젝트의 모범 사례를 통합하며, 특정 프로젝트 요구사항에 맞게 조정되어야 합니다.
