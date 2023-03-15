const checkBox = document.querySelector('.chkbox')

const validateForm = formSelector =>{
    

    const validationOptions = [

        {
            attribute: 'minlength',
            isValid: input => input.value && input.value.length >= parseInt(input.minLength, 10),
            errorMessage: (input,label) =>`${label.textContent} is less than ${input.minLength} characters`,
            
        },

        {
            attribute: 'maxlengthcustom',
            isValid: input => input.value && input.value.length <= parseInt(input.getAttribute("maxlengthcustom"), 10),
            errorMessage: (input,label) =>`${label.textContent} should be less than ${input.getAttribute("maxlengthcustom")} characters`,
            
        },
        {
            attribute: 'match',
            isValid: input =>  {
                const matchSelector = input.getAttribute("match")
                const matchedElement = formElement.querySelector(`#${matchSelector}`)
                return matchedElement && matchedElement.value.trim() === input.value.trim()
            },
            errorMessage: (input,label) =>{
                const matchSelector = input.getAttribute("match")
                const matchedElement = formElement.querySelector(`#${matchSelector}`)
                const matchedLabel = matchedElement.parentElement.querySelector("label")
                return `${label.textContent} and ${matchedLabel.textContent} do not match`
            }
            
        },
        {
            attribute: 'pattern',
            isValid: input =>  {
                const pattern = new RegExp(input.pattern)
                return pattern.test(String(input.value)).toLowerCase
            },
            errorMessage: (input,label) =>`${label.textContent} does not match a standard email formart`,
            
        },
 
        {
            attribute: 'required',
            isValid: input => input.value.trim() !== '',
            errorMessage: (input,label) =>`${label.textContent} is required`,
            
        },
     
    ]

    const validateSingleFormGroup = formGroup =>{
        const label = formGroup.querySelector('label')
        const input = formGroup.querySelector('input')
        const errorContainer = formGroup.parentElement.querySelector('.error')

        let formGroupError = false

        for (const option of validationOptions){
            if(input.hasAttribute(option.attribute) && !option.isValid(input)){
                errorContainer.textContent = option.errorMessage(input,label)
                formGroupError = true
                input.style.border = "2px solid #cc0000"

            }
        }

        if(!formGroupError){
            errorContainer.textContent = ''
            input.style.border = "1px solid #00c851"
        }
    }
    const formElement = document.querySelector(formSelector)
    formElement.setAttribute("novalidate", '')
   
    formElement.addEventListener('submit', event =>{
        event.preventDefault()
        validateAllFormGroups(formElement);     
           })

    const validateAllFormGroups = (formToValidate) =>{
        const formGroups  = Array.from(formToValidate.querySelectorAll('.formgroup'))
        let allValid = true
        formGroups.forEach(formGroup=>{
            validateSingleFormGroup(formGroup)
            const errorContainer = formGroup.parentElement.querySelector('.error')
            if(errorContainer.textContent){
                allValid  = false;
            }
            
        })
        // const loginValid = allValid && checkBox === null
        // const signupValid = allValid && checkBox.checked
        if(allValid){
            let login = document.querySelector(".login-popup")
            var time = ()=>{
                login.classList.remove("hide-popup")
                console.log("timer")
            }
            var timing = ()=>{
                login.classList.add("hide-popup")
                formElement.submit()
                window.location.href = 'index.html'

            }
            setTimeout(time, 500)
            setTimeout(timing, 2000)

        }
    }


}

validateForm('#form')
