interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string,
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'barrozorcb@gobarber.com.br',
      name: 'Rafael Caldas'
    }
  }
} as IMailConfig;