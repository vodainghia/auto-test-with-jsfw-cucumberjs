import { Given } from 'cucumber';
import basePage from '../pages/base.Page';

Given(/^the user opens the (url|site) "([^"]*)?"$/, function(type, page) {
	basePage.openWebsite(type, page);
});

