if __name__ == '__main__':
    date = '6.11'
    import datetime
    print(datetime.datetime.strptime(date,'%d.%m').replace(year=2023))