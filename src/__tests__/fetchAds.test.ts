import axios from 'axios';
import { fetchAds, FetchAdsResponse } from '../fetchAds'; 

jest.mock('axios');

describe('fetchAds', () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return the response result when msg is "OK" and code is 0', async () => {
        const mockResponse: FetchAdsResponse = {
            code: 0,
            msg: 'OK',
            result: {
                unit: 'PUBLIC_TEST_UNIT_ID_320_100',
                format: 'banner',
                w: 320,
                h: 100,
                creativeId: 'test_creative',
                ad: '<div>Ad Content</div>',
            },
        };

        mockedAxios.request.mockResolvedValue({ data: mockResponse });

        const result = await fetchAds();
        expect(result.unit).toBe('PUBLIC_TEST_UNIT_ID_320_100');
        expect(mockedAxios.request).toHaveBeenCalledTimes(1);
    });

    it('should throw an error for ERROR_CODE_INVALID_UNIT (4000)', async () => {
        const mockErrorResponse: FetchAdsResponse = {
            code: 4000,
            msg: 'ERROR_CODE_INVALID_UNIT',
            result: null,
        };

        mockedAxios.request.mockResolvedValue({ data: mockErrorResponse });

        await expect(fetchAds()).rejects.toThrow('Error: ERROR_CODE_INVALID_UNIT (Code: 4000)');
        expect(mockedAxios.request).toHaveBeenCalledTimes(1);
    });

    it('should throw an error for ERROR_CODE_AD_INACTIVE (4001)', async () => {
        const mockErrorResponse: FetchAdsResponse = {
            code: 4001,
            msg: 'ERROR_CODE_AD_INACTIVE',
            result: null,
        };

        mockedAxios.request.mockResolvedValue({ data: mockErrorResponse });

        await expect(fetchAds()).rejects.toThrow('Error: ERROR_CODE_AD_INACTIVE (Code: 4001)');
        expect(mockedAxios.request).toHaveBeenCalledTimes(1);
    });

    it('should throw an error for ERROR_CODE_AD_NO_FILL (4002)', async () => {
        const mockErrorResponse: FetchAdsResponse = {
            code: 4002,
            msg: 'ERROR_CODE_AD_NO_FILL',
            result: null,
        };

        mockedAxios.request.mockResolvedValue({ data: mockErrorResponse });

        await expect(fetchAds()).rejects.toThrow('Error: ERROR_CODE_AD_NO_FILL (Code: 4002)');
        expect(mockedAxios.request).toHaveBeenCalledTimes(1);
    });

    it('should throw an error for ERROR_CODE_INVALID_PARAMS (4003)', async () => {
        const mockErrorResponse: FetchAdsResponse = {
            code: 4003,
            msg: 'ERROR_CODE_INVALID_PARAMS',
            result: null,
        };

        mockedAxios.request.mockResolvedValue({ data: mockErrorResponse });

        await expect(fetchAds()).rejects.toThrow('Error: ERROR_CODE_INVALID_PARAMS (Code: 4003)');
        expect(mockedAxios.request).toHaveBeenCalledTimes(1);
    });

    it('should throw a generic error when the request fails', async () => {
        mockedAxios.request.mockRejectedValue(new Error('Network issue'));

        await expect(fetchAds()).rejects.toThrow('Failed to fetch ads: Network issue');
        expect(mockedAxios.request).toHaveBeenCalledTimes(1);
    });

    it('should throw an error when result is null despite success', async () => {
        const mockResponse: FetchAdsResponse = {
            code: 0,
            msg: 'OK',
            result: null, 
        };

        mockedAxios.request.mockResolvedValue({ data: mockResponse });

        await expect(fetchAds()).rejects.toThrow('Result is null despite success status.');
        expect(mockedAxios.request).toHaveBeenCalledTimes(1);
    });
});
