############# Un-Comment block to run install and import module ################
# #Install and Import, need to handle errors or failures
# #Install the Exchange Online Management module
# Install-Module -Name ExchangeOnlineManagement -Scope CurrentUser -Force -AllowClobber
# # Import the module
# Import-Module ExchangeOnlineManagement
#############################

# Connect to Exchange Online, will prompt sign in
Write-Output "Please use the external window to sign in with client credentials"
#Needs to handle connection failure
Connect-ExchangeOnline

#Define Functions
function get-PermissionsList {
    $emailAddress = Read-Host -Prompt "Enter user email"

    $confirm = Read-Host -Prompt "The email address $emailAddress is for the correct user?"
    if($confirm -eq 'Y' -or $confirm -eq 'y' ) {
        Write-Output "Proceeding..."
    } else {
        get-PermissionsList
    }

    #Iterate through email address string to append username to $fileName
    #will stop if they use a (.) ex: steven.olson@ appends steven
    #solson@ would append "solson"
    $fileName = "MailboxAccessFor-"
    for ($i = 0; $i -lt $emailAddress.Length; $i++) {
        if ($emailAddress[$i] -match '^[a-zA-Z]$') {
            $fileName += $emailAddress[$i] 
        } else {
            $i = $emailAddress.Length
        } 
    }

    #Searching permissions:
    Write-Output "Retrieving permissions, please stand by..."
    try {
        $delegateAccess = Get-Mailbox -ResultSize Unlimited | Get-MailboxPermission -User $emailAddress | Format-Table Identity, Name, AccessRights
        #Write-Output $delegateAccess
        #get or configure filepath
        #Hardcoded for now
        $filePath = "C:\temp\mailboxChecks\" + $fileName + ".txt"
        $delegateAccess | Out-File -FilePath $filePath

        $confirmation = Read-Host -Prompt "Check a user? (Y/N)"

        # Check the confirmation response
        if ($confirmation -eq 'Y' -or $confirmation -eq 'y') {
            get-PermissionsList
        } else {
            Write-Output "Disconnecting..."
            Disconnect-ExchangeOnline
            Write-Output "Goodbye! Press any key to exit..."

        # Wait for the user to press any key
        $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
        }


    }
    catch {
        <#Do this if a terminating exception happens#>
        Write-Output "An error occurred while retrieving mailbox permissions command: $_"

        $confirmation = Read-Host -Prompt "Check a user? (Y/N)"

        # Check the confirmation response
        if ($confirmation -eq 'Y' -or $confirmation -eq 'y') {
            get-PermissionsList
        } else {
            Write-Output "Disconnecting..."
            Disconnect-ExchangeOnline
            Write-Output "Goodbye! Press any key to exit..."

        # Wait for the user to press any key
        $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
        }
    }
}

$confirmation = Read-Host -Prompt "Check a user? (Y/N)"

# Check the confirmation response
if ($confirmation -eq 'Y' -or $confirmation -eq 'y') {
    get-PermissionsList
} else {
    Write-Output "Disconnecting..."
    Disconnect-ExchangeOnline
    Write-Output "Goodbye! Press any key to exit..."

# Wait for the user to press any key
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}
