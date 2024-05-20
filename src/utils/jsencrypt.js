import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgF/BausWiGePb1B9d7OH\n' +
'zmU/Lq7MirPorp+P/jfFc3r/vhO48c8zTzLQmUr/IGMoJ8ytT8oIqUBlrhn5eyqM\n' +
'zIQ0z37nPzRVI1GXqazNAnJfr1IKQuSuEGjBZwTAw3nQB8Y8S2E2UC4BZcR57fgn\n' +
'lwhciwy6W/WZIGW/U8FCjFlDwJo5k5TMl4yJHg7eGzWbvj4mXmu/NHHnxX6y5MI3\n' +
'PXIg6x3LlT5E5qxq/0DZHAvl5qRjU/R/Xx0CceBtqAgqheGNJLYYELFBMCEhgTuT\n' +
't9fW7cO4oP0blkhZzzqo379yPXIE2x0m3SDhtlDwa/xOoWdyvR8KFZ0078DIMcER\n' +
'pQIDAQAB'

const privateKey = 'MIIEowIBAAKCAQEAgF/BausWiGePb1B9d7OHzmU/Lq7MirPorp+P/jfFc3r/vhO4\n' +
'8c8zTzLQmUr/IGMoJ8ytT8oIqUBlrhn5eyqMzIQ0z37nPzRVI1GXqazNAnJfr1IK\n' +
'QuSuEGjBZwTAw3nQB8Y8S2E2UC4BZcR57fgnlwhciwy6W/WZIGW/U8FCjFlDwJo5\n' +
'k5TMl4yJHg7eGzWbvj4mXmu/NHHnxX6y5MI3PXIg6x3LlT5E5qxq/0DZHAvl5qRj\n' +
'U/R/Xx0CceBtqAgqheGNJLYYELFBMCEhgTuTt9fW7cO4oP0blkhZzzqo379yPXIE\n' +
'2x0m3SDhtlDwa/xOoWdyvR8KFZ0078DIMcERpQIDAQABAoIBAB41alB8rbq/k/M/\n' +
'36aRar3Y+XtEywFAwNqG1d2exiocoZ3bCkRs28ghTxEjotG+Q67J7Wa/RjZ93u+P\n' +
'UTP4mVVvLvY9CLHI4NgE1UmqTjvrKjUZeyyun39hB1H0vl/BhICv13RtldhcWxvV\n' +
'llO3d6mE4DIgdqI5MyV6jAFrkvtvlp/UYQO1zO84073oCtzDhzBh6KlGVmgyf5g7\n' +
'wBTIc4TrYmbDW/fm/CoW4hPF3Bi1xlzpgl/4whC3FTZhM+OX3JLPv1QZ/PP2KOzB\n' +
'/wW4o1x61VND3XdJOp56XVvArxNzrPQZ6iRIHURWHkR35/4nUOThQbf4axXUE9im\n' +
'kUSB4cECgYEA4m5TbkV2hLiYYPzBzGtmMePz57WinQEMZB0Sdu9+XI47ofolP71G\n' +
'l5mezmEHL4wQm6MPzTzb657yN/T7vWeWXTM2mOceSzvAFl+frDt3JpQngwmJFd2k\n' +
'56kqyQ58B6mpFRd8nfJuOBDxSnxsn7ow0dvLMpRf0ARJZRT5sMO34VkCgYEAkSNZ\n' +
'Z6woj9R/+fAJbeaupYNsH7spWbv/KgpwJYGn+nd0ygClGq3r210jMEcce3jpAz09\n' +
'0KmV+Gt05J/pZfi89mmaayFAiOglYASMBOXCrpcFHzxafrkCDVp9riHimqKz/M66\n' +
'xJgatI75/zraDIkJnn/KJ8U/D1YH23ZXxonWfS0CgYEA2AuSWV23xszmv2uLcgNr\n' +
'f+DTQNuCq7FrZD6E9qxucdtYNKWbUuTC7TUrXBkiJRDMa+O62QXfhEKlNBTw+XhT\n' +
'9Ns/lca3lesNzYsxq8EVX97ukE3R2eYgSNWVOD80wo70AGbnhUDiP2aTA5IShpi9\n' +
'qg7AI6OEg9MDQIox76He2gkCgYBtUtgkTDxdYq5nQJSJsOo6iAzotd0G16HzM9uX\n' +
'lNtHwbU591RmDT2MhdJcqiPdKY0ywG2QgD0T2zU4hO+UvNDxN0h2i5yFw39rnOEv\n' +
'SzXitqTIC3kK3Sabkl76zFFZM1cqBToPnZb4DH5o7xaRvKN/PTizzlKapa3TdIfX\n' +
'Z7olnQKBgDXWHAwNfVawNH449BC/z8uZn2IMOsEaB2jHLA1lg7tTjAuiwmqoyNzn\n' +
'MHLPU8mm6CxlOv7OwW/8Hgkh7gYCLNz0+uZMzQ4K+PXNu+1f8xwgucp5kpCGDEpL\n' +
'l+hU8aYaUML7295huOURwpz6wal/o75VkVOtihri2HmRK6k5V4Bx'

// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对数据进行加密
}

// 解密
export function decrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey) // 设置私钥
  return encryptor.decrypt(txt) // 对数据进行解密
}

