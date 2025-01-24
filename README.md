
# Adrop API Fetcher

[![TypeScript](https://img.shields.io/badge/TypeScript-Latest-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)  [![Axios](https://img.shields.io/badge/Axios-0.27.2-5A29E4?style=flat&logo=axios)](https://axios-http.com/)  [![Jest](https://img.shields.io/badge/Jest-29.0.0-C21325?style=flat&logo=jest)](https://jestjs.io/)  


This project is a simple TypeScript-based application that fetches advertisements from the Adrop API. The project includes unit tests using Jest to ensure correct functionality.

## Features

- Fetch advertisements from the Adrop API.
- Written in TypeScript for type safety.
- Jest test coverage to verify API responses.
- Environment variable support for API key management.

## Technologies Used

- **TypeScript** - Ensures type safety and better code maintainability.
- **Axios** - HTTP client to fetch data from the API.
- **Jest** - Testing framework for unit tests.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/adrop-api-test.git
   cd adrop-api-test
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create an `.env` file and add your API key:

   ```env
   API_KEY=your_adrop_api_key_here
   ```

## Usage

1. Run the script to fetch ads:

   ```bash
   npm run start
   ```

2. The response will be logged to the console.

## Testing

Run the Jest test suite to verify functionality:

```bash
npm test
```

Run the test coverage report:

```bash
npm run test-coverage
```

### Example Test Output

```json
{
  "code": 0,
  "msg": "OK",
  "result": {
    "unit": "PUBLIC_TEST_UNIT_ID_320_100",
    "format": "banner",
    "w": 320,
    "h": 100,
    "creativeId": "test_creative",
    "ad": "<div>...</div>"
  }
}
```
After running npm run test-coverage, a detailed report will be generated, typically in the coverage/ directory.

## Project Structure

```
├── src
│   ├── fetchAds.ts          # Function to fetch ads from the API
│   └── __tests__
│       ├── fetchAds.test.ts # Jest test for the fetchAds function
├── .env                     # Environment variables (ignored in .gitignore)
├── package.json             # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── jest.config.js            # Jest configuration
└── README.md                 # Project documentation
```

## Configuration

Update API request parameters in `src/fetchAds.ts`:

```ts
let config = {
    method: 'get',
    baseURL: 'https://api-v2.adrop.io',
    url: '/request?unit={unit_id}&uid={user_id}&pf={platform}&lcl={locale}',
    headers: {
        'Authorization': `${API_KEY}`
    }
};
```

## Troubleshooting

- Ensure the `.env` file contains the correct `API_KEY`.
- Verify that your internet connection allows access to `https://api-v2.adrop.io`.
- Run tests to confirm functionality before deployment.

## License

This project is licensed under the MIT License.

