require('dotenv').config();
import axios, { AxiosRequestConfig } from 'axios';

const unit_id = 'PUBLIC_TEST_UNIT_ID_320_100';
const user_id = '1233';
const platform = 'web';
const locale = 'en-US';

const config: AxiosRequestConfig = {
    method: 'get',
    baseURL: 'https://api-v2.adrop.io',
    url: `/request?unit=${unit_id}&uid=${user_id}&pf=${platform}&lcl=${locale}`,
    headers: {
        'Authorization': `${process.env.API_KEY}`,
    }
};

type AdResult = {
    unit: string;
    format: string;
    w: number;
    h: number;
    creativeId: string;
    ad: string;
};

export type FetchAdsResponse = {
    code: number;
    msg: string;
    result: AdResult | null;
};

export async function fetchAds(): Promise<AdResult> {
    try {
        const response = await axios.request<FetchAdsResponse>(config);

        // Check if the response indicates an error based on `code` and `msg`
        if (response.data.code !== 0 || response.data.msg !== 'OK') {
            throw new Error(`Error: ${response.data.msg} (Code: ${response.data.code})`);
        }

        // Return the result if the response is successful
        if (response.data.result) {
            return response.data.result;
        } else {
            throw new Error('Result is null despite success status.');
        }
    } catch (error: any) {
        throw new Error(`Failed to fetch ads: ${(error as Error).message}`);
    }
}


