#!/bin/bash
# MCP Environment Variables Setup Script
# Usage: source setup-env.sh

# Check if .env file exists
if [ ! -f "/home/user/MCP/.env" ]; then
    echo "❌ Error: .env file not found!"
    echo "Please create .env file from .env.example template"
    return 1
fi

# Load environment variables from .env file
echo "🔐 Loading MCP environment variables..."
export $(cat /home/user/MCP/.env | grep -v '^#' | grep -v '^$' | xargs)

# Verify critical variables
echo ""
echo "✅ Environment Variables Loaded:"
echo ""

if [ ! -z "$ANTHROPIC_API_KEY" ]; then
    echo "✓ ANTHROPIC_API_KEY: ${ANTHROPIC_API_KEY:0:20}...${ANTHROPIC_API_KEY: -6}"
else
    echo "✗ ANTHROPIC_API_KEY: Not set"
fi

if [ ! -z "$GITHUB_PERSONAL_ACCESS_TOKEN" ]; then
    echo "✓ GITHUB_PERSONAL_ACCESS_TOKEN: ${GITHUB_PERSONAL_ACCESS_TOKEN:0:10}...${GITHUB_PERSONAL_ACCESS_TOKEN: -4}"
else
    echo "✗ GITHUB_PERSONAL_ACCESS_TOKEN: Not set"
fi

if [ ! -z "$FIRECRAWL_API_KEY" ]; then
    echo "✓ FIRECRAWL_API_KEY: ${FIRECRAWL_API_KEY:0:10}...${FIRECRAWL_API_KEY: -4}"
else
    echo "✗ FIRECRAWL_API_KEY: Not set"
fi

if [ ! -z "$DATABASE_URL" ]; then
    echo "✓ DATABASE_URL: Set"
else
    echo "✗ DATABASE_URL: Not set"
fi

echo ""
echo "🚀 Environment ready! You can now use MCP servers."
echo ""
echo "Examples:"
echo "  npx -y @modelcontextprotocol/server-github"
echo "  npx -y firecrawl-mcp"
echo ""
