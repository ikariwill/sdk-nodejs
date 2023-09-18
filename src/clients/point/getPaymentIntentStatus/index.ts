import { RestClient } from '@src/utils/restClient';
import { PaymentIntentStatusResponse } from '../commonTypes';
import { PaymentIntentStatus } from './types';

export default function getPaymentIntentStatus({
	payment_intent_id,
	config,
}: PaymentIntentStatus): Promise<PaymentIntentStatusResponse> {
	return RestClient.fetch<PaymentIntentStatusResponse>(
		`/point/integration-api/payment-intents/${payment_intent_id}/events`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${config.accessToken}`,
			},
			...config.options,
		}
	);
}
