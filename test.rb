require "selenium-webdriver"

driver = Selenium::WebDriver.for :firefox
driver.navigate.to "http://yasla.net"

#element = driver.find_element(:name, 'q')
#element.send_keys "Hello WebDriver!"
#element.submit

puts driver.title

driver.quit
