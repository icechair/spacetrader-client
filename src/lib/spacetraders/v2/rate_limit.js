import { BehaviorSubject, of, timer } from 'rxjs';
import { filter, map, mergeMap, take } from 'rxjs/operators';

let tokens = 30;
let sliding_window_time = 60_000;
let token_changed_subject = new BehaviorSubject(tokens);

/**
 * @typedef GlobalRateLimitOpts
 * @property {number?} parallel
 * @property {number?} sliding_window_time
 */
/**
 * @param {GlobalRateLimitOpts} [opt]
 */
export function global_rate_limit(opt) {
	tokens = opt?.parallel ?? 200;
	sliding_window_time = opt?.sliding_window_time ?? 60_000;
	token_changed_subject.next(tokens);

	const consume = () => token_changed_subject.next(--tokens);
	const renew = () => token_changed_subject.next(++tokens);
	const available = token_changed_subject.pipe(filter(() => tokens > 0));
	return mergeMap((value) =>
		available.pipe(
			take(1),
			map(() => {
				consume();
				timer(sliding_window_time).subscribe(renew);
				return value;
			}),
		),
	);
}
