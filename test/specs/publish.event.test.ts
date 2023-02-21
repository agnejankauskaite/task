import loginData from '../testData/loginData.js'
import eventData from '../testData/eventData.js'

import LoginPage from '../pageobjects/login.page.js'
import DashboardPage from '../pageobjects/dashboard.page.js'
import EventPage from '../pageobjects/event.page.js'

describe('Create a new event', () => {
    it('should pusblish and confirm an event', async () => {
        await LoginPage.open()
        await LoginPage.login(loginData.email, loginData.password)
        await DashboardPage.clickCreateNewEventButton()
        await EventPage.fillInreateNewEventForm(eventData.name, eventData.password)
        await EventPage.clickPublishButton()
        await EventPage.clickPublishEventButton()
    })
})